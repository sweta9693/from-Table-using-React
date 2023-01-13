import React ,{useReducer, useState } from 'react';
import './App.css';
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 10000);

  }
  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,    });
  }
  return (
    <div className="studentdetails">
      <h1>Student Details</h1>
      {submitting &&
       <div>You are submitting the following:
       <ul>
         {Object.entries(formData).map(([name, value]) => (
           <li key={name}><strong>{name}</strong>:{value.toString()}</li>
         ))}
       </ul>
       </div>
     }
      <form onSubmit={handleSubmit}>
      <fieldset disabled={submitting}>
         <label>
           <p>Name</p>
           <input name="name" onChange={handleChange}/>
         </label>
       </fieldset>
       <fieldset disabled={submitting}>
         <label>
           <p>Stream</p>
           <select name="Streams" onChange={handleChange}>
               <option value="">--Please choose an option--</option>
               <option value="CSE">CSE</option>
               <option value="CIVIL">CIVIL</option>
               <option value="MECHANICAL">MECHANICAL</option>
           </select>
         </label>
         <label>
           <p>No of Subjects</p>
           <input type="number" name="count" onChange={handleChange} step="1"/>
         </label>
       </fieldset >
       <button type="submit"disabled={submitting}>Submit</button>
       </form>
    </div>
  )
}

export default App;
