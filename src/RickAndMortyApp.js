
import SearchForm from "./SearchForm"
import { useState } from "react";
import SearchResults from "./SearchResults";
import { Route, Routes, HashRouter as Router, Link } from 'react-router-dom';
import CharactersDetails from "./CharactersDetails";
import LogoRick from "./components/Logo";


function RickAndMortyApp() {

    const [query, setQuery] = useState('');

    function performSearch(queryText){
        console.log(`in rickandmortyapp::performSearch()` , queryText)
        setQuery(queryText)
    }

    // let output ; 
    // if(query.length > 0){
    //     output = <p>search result go here</p>
    // }else{
    //     output = <p> Please enter a search</p>
    // }

//     let output  = query.length > 0 
//     ?  <SearchResults searchText={query} /> //searchresult
//     : <p> Please enter a search</p>

//   return (
//     <>
//     <div>Rick And Morty App</div>
//     <hr/>

//     {/* so tht the child csn pss the search 
//     text from the form back uo the tree to the parent */}
//     <SearchForm  onSearchSubmit={performSearch}  />
   

//     {output}
//     </>
    
//     )

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
      {/* 
        So that the child can pass the search text from the form BACK UP THE TREE
        to the parent when the form is submitted, the parent (FlickrApp) passes
        one of its own nested functions to the child, like a callback, and the
        child can run it as a function at the right time, and by passing in an
        argument, send data to the parent
       */}
      <SearchForm />

      <Routes>

        <Route path="/" exact element={<SearchResults /> } />

        {/* 
          "When you see a URL like "/search/ocean coral", handle it by mounting
           the SearchResults component here (and make the :query text ("ocean coral") 
           available as params within the component)
         */}
        <Route path="/search/:query" element={ <SearchResults/> } />
        
        {/* 
          <Route path="/photo/:id" element={ <PhotoDetail/> }
         */}
          <Route path="/character/:id" element={ <CharactersDetails /> } />

      
      </Routes>
     

    </Router>
    </div>
  );

}

export default RickAndMortyApp