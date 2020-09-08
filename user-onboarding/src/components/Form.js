import React from 'react';

function Form() {
  
  return (
    <form>
      <label htmlFor="name">Name
        <input 
          type="text"
          name='name'
          id='name'
        />
      </label>
      <br/>

      <label htmlFor="email">Email
        <input 
          type="email"
          name='email'
          id='email'
        />
      </label>
      <br />

      <label htmlFor="password">Password
        <input 
          type="password"
          name='password'
          id='password'
        />
      </label>
      <br />

      <label htmlFor="name">Terms & Service
        <input 
          type="checkbox"
          name='terms'
          id='terms'
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;