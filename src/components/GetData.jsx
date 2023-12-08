// import React, { useState, useEffect } from "react";
// import axios from "axios";



//  const GetData = () => {

//     //state to store the fetched data
//     const [data , setData] = useState([]);

//     //// url = `https://rickandmortyapi.com/api/character`
//     //// urlC = 'https://rickandmortyapi.com/api/character/206'

//     /// function to fetch data using axios
//     const fetchData =  async () => {

//         try {
//             const response = await axios.get('https://rickandmortyapi.com/api/character');
//             console.log(response.data.results)
//             setData(response.data.results);
            
//             // setData(response.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
//     useEffect(() => {
//         fetchData();
//     }, [])
    

//      return(
//         <>
//         <ul>
          
//                 {data.map(e => {
//                     <li> { e.name} </li>
//                 })}
           
//         </ul>
//         </>
//      )
    
// }


//  export default GetData;



import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css'
import Button from './Button'

const GetData = () => {
  // state to store the fetched data

  const [data, setData] = useState([]);
  const [displayCharacters , setdisplayCharacters] = useState(false)
  // url = `https://rickandmortyapi.com/api/character`
  // urlC = 'https://rickandmortyapi.com/api/character/206'
  /// `https://rickandmortyapi.com/api/character`

  // function to fetch data using axios
  const fetchData = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character?page=2')
      
        console.log(response.data.results);
        setData(response.data.results);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log("Error:", error);
        }
      }
  };
  function handleclickBTN(e){
    setdisplayCharacters(true)
    console.log(e.target)
  
  }
  useEffect(() => {
  
      fetchData();
    
  }, []);



 

return (
  <>


<Button handleclick={handleclickBTN} />
     { displayCharacters ? 
    <ul className="ulListRickAndMorty" style={{ listStyleType: 'none' }}>
      {data.map(e => (
        <div key={e.id} className="containerChar">
          <li>
            <p>{e.name}</p>
          <span><small>{e.species}</small></span>  
          <a href="#">  <img src={e.image} alt={e.name} />  </a> 
          </li>
        </div>
      ))}
    </ul> :undefined}
  </>
);




};

export default GetData;
