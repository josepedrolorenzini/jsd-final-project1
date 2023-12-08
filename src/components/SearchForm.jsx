import { useState } from 'react';

function SearchForm() {

  const [name, setName] = useState("");



  let handleSubmission = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log(name.id)
  } 
  return (
    <>
    {/* <p>{name.map(e => e)}</p><br/> */}
    <form onSubmit={handleSubmission}> 
      <label>Enter your character name:<br></br>
        <input type="text" 
        onChange={((e) => {
          e.preventDefault()
          console.log(e.target.value)
        }
        )}/>
      </label><br></br>
    </form>
    
    </>
  )
}

export default SearchForm