import React from 'react';


export default function NewTicketForm(){
  let _image = null;
  let _name = null;
  let _role = null;

  function handleSubmission(event){
    event.preventDefault();
    _image.value = '';
    _name.value = '';
    _role.value = '';
  }

  return(
    <div>
      <style jsx>
      {`
        .title{
          text-align: center;
        }

        label{
          font-size: 20px;
        }

      `}
      </style>
      <h1 className='title'>Fill out the form below with the necessary information</h1>
      <hr/>
      <form onSubmit={handleSubmission}>
        <label>Image URL path</label>
        <input
          type='text'
          id='image'
          placeholder='Image URL path'
          ref={(input) => {_image = input;}}/> <br/><br/>
        <label>Name</label>
        <input
          type='text'
          id='name'
          placeholder='Champion Name'
          ref={(input) => {_name = input;}}/> <br/><br/>
        <label>Role</label>
        <input
          type='text'
          id='name'
          placeholder='Role'
          ref={(input) => {_role = input;}}/><br/><br/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
