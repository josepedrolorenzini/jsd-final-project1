import { useState } from "react"
import  axios  from "axios";
import { Route, Routes, Link, BrowserRouter as Router, Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function SearchForm(props) {
     // Generate an array of 42 numbers (e.g., [1, 2, 3, ..., 20])
  const optionsArray = Array.from({ length: 42 }, (_, index) => index + 1);
  const [pageNumber , setpageNumber] = useState('') ;
  const [filterTerm, setFilterTerm]  = useState('');
  const navigateTo = useNavigate();

  
  
   ///select page
  const handleSelectChange = (e) => {
    setpageNumber(e.target.value);
  };




  function handleSubmit(e){
        e.preventDefault()
        console.log(e.target ,  pageNumber);
        // tell the parent when something happening
      //  props.onSearchSubmit(pageNumber)
        navigateTo(`/search/${ pageNumber }`);
      
  }


//   function handleFilter(e){
//     const userInput = e.target.value;
//      console.log(optionsArray)
//      console.log(userInput)
//   }
    
  return (
   <>
    <form  onSubmit={handleSubmit} className="mortyPages">   
   <div>
      <label htmlFor="selectNumber">Select a Page Number:</label>
      <select id="selectNumber" onChange={handleSelectChange} value={pageNumber}>
        {optionsArray.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <button>Search</button>
    </div>
</form> {/* select pges numbers */}


    {/* <form id="FilterSearch">
        <input 
        type="text" 
        onChange={handleFilter} 
        placeholder="add number 1 from 1 to 42"></input>
        <button>filter</button>
    </form>

    <div>  {filterTerm}</div> */}
   </>
  )
}

export default SearchForm