import React, { useState } from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';

export default function Contact() {

  const {register, handleSubmit, watch, formState : {errors}} = useForm({defaultValues: {
    name: "Sneha",
    email: "",
    subscribe: false
  }});
  const onContactForm = (data) => {
    console.log(data);
  }

  console.log(errors);
  

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Contact</h1>
        <form className='contact-form' onSubmit={handleSubmit(onContactForm)}>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input id="name" {...register("name", {required: "Name is required.", minLength: {value: 3, message: "Minimum length should be 3."}})} />
            {errors.name?.message}
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input id="email" type='email' {...register("email", {required: "Email is required."}) } />
            {errors.email?.message}
          </div>
          <div className='form-control'>
            <label htmlFor='subscribe'>Subscribe</label>
            <input id="subscribe" type='checkbox' {...register("subscribe")} />
          </div>
          <button>Submit</button>
          <br/>
          {
            JSON.stringify(watch())
          }
        </form>
    </div>
  )
}
