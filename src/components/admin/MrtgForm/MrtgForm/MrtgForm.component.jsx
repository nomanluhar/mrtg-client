import React,{ useState } from 'react'


const MrtgForm = () => {

  const [formValues, setFormValues] = useState([{ name: "", MRTG_URL: ""}])

  const handleChange = (i, e) => {
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
    }
  
  const addFormFields = () => {
      setFormValues([...formValues, { name: "", MRTG_URL: "" }])
    }
  
  const removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
}



  return (
    <div><h1>
      MRTG for specific user</h1>
      <div>
      <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label>MRTG URL</label>
              <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
      </div>
    </div>
      
  )
}

export default MrtgForm;