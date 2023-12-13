
import { useParams ,useNavigate, Link } from 'react-router-dom';
import { useState , useEffect } from "react";
import  axios  from 'axios';
function CharactersDetails() {



  
  const [character , setCharacter]        = useState({});
  const [ loading, setLoading ]           = useState( true );
  const navigateTo = useNavigate();
  const params = useParams();

  function loadCharacterDetails(id){
     
    
  
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => 
        { console.log(response.data)
          
         setCharacter(response.data)
         setLoading(false)
         
        })
    .catch(err => console.warn("Your app doesnt load" , err))
}///new axios click characters request 

useEffect(() => {
  loadCharacterDetails(params.id)
}, [params.id])//second empty arg means 'run once on mount'


if (!character) {
  return <div>Loading...</div>; // or any other placeholder or loading indicator
}

// Check if 'character.origin' and locations is defined before accessing its 'name' property
const originName = character.origin?.name || 'Unknown Origin';
const locationName = character.location?.name || 'LOCaTION Unknown';


return (
  <>
  
  <div className='CharacterSinglePage'> 
    <h2>Character Details</h2>
    {/* <p>Query parameter from URL: {params.id}</p> */}
    
    {/* Display character details here */}
    <h1 style={{ color: '#E762D7FF' }} >{character.name}</h1>
    <b>Species: {character.species}</b>
    <br/>
    <b  style={{ color: 'hotpink' }} >Status: {character.status}</b><br/>
    <b>Origin: {originName}</b><br></br>
    <b>Location: {locationName}</b>
    <img src={character.image} alt={character.name} />

    {console.log(params)}
    {console.log(character)}
  </div>
  </>
);
}

export default CharactersDetails

