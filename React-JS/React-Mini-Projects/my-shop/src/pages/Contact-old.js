import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    description: '',
    country: '',
    subscribe: false
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});
    
    if (contactForm.name === '' || contactForm.name === null) {
      setErrors({
        name: 'Name is required.'
      });
      // alert("Name is required");
      return;
    }

    console.log(contactForm);
  }

  const handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.id);
    setContactForm({
      ...contactForm,
      [event.target.id] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
    });
  }

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Contact</h1>
        <form className='contact-form' onSubmit={handleSubmit} noValidate>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            {/* <input id="name" value={name} onChange={(event) => setName(event.target.value)}/> */}
            {/* <input id="name" value={contactForm.name} onChange={(event) => setName(event.target.value)}/> */}
            <input id="name" value={contactForm.name} onChange={handleChange} required formNoValidate/>
            {errors && errors.name}
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            {/* <input id="email" value={email} onChange={(event) => setEmail(event.target.value)}/> */}
            {/* <input id="email" value={contactForm.email} onChange={(event) => setEmail(event.target.value)}/> */}
            <input id="email" type="email" value={contactForm.email} onChange={handleChange}/>
          </div>
          <div className='form-control'>
            <label htmlFor='description'>Description</label>
            <textarea id="description" value={contactForm.description} onChange={handleChange} cols={30} rows={6}></textarea>
          </div>
          <div className='form-control'>
            <select id="country" value={contactForm.country} onChange={handleChange}>
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="Russia">Russia</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='subscribe'>Subscribe</label>
            <input id="subscribe" type="checkbox" checked={contactForm.subscribe} onChange={handleChange}/>
          </div>
          <button>Submit</button>
          <br/>
          Name: {JSON.stringify(contactForm)}
        </form>
    </div>
  )
}
