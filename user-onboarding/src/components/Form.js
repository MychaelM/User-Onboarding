import React, { useState } from 'react';

function Form() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });

  const inputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value })
    console.log(formData);
  }
  
  return (
    <form>
      <label htmlFor="name">Name
        <input 
          type="text"
          name='name'
          id='name'
          onChange={inputChange}
        />
      </label>
      <br/>

      <label htmlFor="email">Email
        <input 
          type="email"
          name='email'
          id='email'
          onChange={inputChange}
        />
      </label>
      <br />

      <label htmlFor="password">Password
        <input 
          type="password"
          name='password'
          id='password'
          onChange={inputChange}
        />
      </label>
      <br />

      <label htmlFor="name">Terms & Service
        <input 
          type="checkbox"
          name='terms'
          id='terms'
          onChange={inputChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;