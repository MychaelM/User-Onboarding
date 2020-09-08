import React, { useState } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup.string().required("Name is definitely required."),
  email: yup
        .string()
        .email("This Must be an Email Address")
        .required("You have to provide an Email Address"),
  password: yup.string().length(8, 'Password must be at least 8 characters'),
  terms: yup.boolean().oneOf([true], "Agree to the Terms mate")
})

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
    // console.log(formData);
  }

  const formSubmit = e => {
    e.preventDefault();
    console.log('Submitted Form');

  }
  
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">Name
        <input 
          type="text"
          name='name'
          id='name'
          value={formData.name}
          onChange={inputChange}
        />
      </label>
      <br/>

      <label htmlFor="email">Email
        <input 
          type="email"
          name='email'
          id='email'
          value={formData.email}
          onChange={inputChange}
        />
      </label>
      <br />

      <label htmlFor="password">Password
        <input 
          type="password"
          name='password'
          id='password'
          value={formData.password}
          onChange={inputChange}
        />
      </label>
      <br />

      <label htmlFor="name">Terms & Service
        <input 
          type="checkbox"
          name='terms'
          id='terms'
          checked={formData.terms}
          onChange={inputChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;