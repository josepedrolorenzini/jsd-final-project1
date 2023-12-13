
import SearchForm from "./SearchForm"
import { useState } from "react";
import SearchResults from "./SearchResults";
import { Route, Routes, HashRouter as Router, Link } from 'react-router-dom';
import CharactersDetails from "./CharactersDetails";
import LogoRick from "./components/Logo";


function RickAndMortyApp() {

    const [query, setQuery] = useState('');

    function performSearch(queryText){
        console.log( queryText)
        setQuery(queryText)
    }

 

return (
    <div>
      <Router>
        <div className="ifGodExists">

        <LogoRick width={200} />
      <h1>  Rick And Morty App</h1>
        </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <hr />
   
      <SearchForm />

      <Routes>

        <Route path="/" exact element={<SearchResults /> } />

      
        <Route path="/search/:query" element={ <SearchResults/> } />
        
         {/* calling my characters details components */}
          <Route path="/character/:id" element={ <CharactersDetails /> } />

      
      </Routes>
     

    </Router> 
    {/* router */}
    </div>
  );

}

export default RickAndMortyApp