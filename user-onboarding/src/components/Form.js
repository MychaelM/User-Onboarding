import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
  name: yup.string().required("Name is definitely required."),
  email: yup
        .string()
        .email("This Must be an Email Address")
        .required("You have to provide an Email Address"),
  password: yup.string().length(8, 'Password must be at least 8 characters'),
  terms: yup.bool().oneOf([true], "Agree to the Terms mate")
})

function Form() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });

  const [errorState, setErrorState] = useState({
    name: '',
    email: '',
    password: '',
    terms: ''
  });

  const validate = e => {

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrorState({
          ...errorState, 
          [e.target.name]: ''
        });
      })
      .catch(err => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
      })
  }

  const inputChange = (e) => {
    e.persist();
    // console.log(e.target.name);
    // console.log(e.target.value);
    validate(e);
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value })
    console.log(formData);
  }

  const formSubmit = e => {
    e.preventDefault();
    console.log('Submitted Form');
    axios
      .post(`https://reqres.in/api/users`, formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
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
      {errorState.name.length > 0 ? (
        <p>{errorState.name}</p>
      ) : null}

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
      {errorState.email.length > 0 ? (
        <p>{errorState.email}</p>
      ) : null}

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
      {errorState.password.length > 0 ? (
        <p>{errorState.password}</p>
      ) : null}

      <label htmlFor="name">Terms & Service
        <input 
          type="checkbox"
          name='terms'
          id='terms'
          checked={formData.terms}
          onChange={inputChange}
        />
        {errorState.terms > 0 ? (
          <p>{errorState.terms}</p>
        ) : null}
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;