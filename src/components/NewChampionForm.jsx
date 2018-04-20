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
      <h1>Fill out the form below with the necessary information</h1>
      <hr/>
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          id='image'
          placeholder='Image URL path'
          ref={(input) => {_image = input;}}/>
        <input
          type='text'
          id='name'
          placeholder='Champion Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='name'
          placeholder='Role'
          ref={(input) => {_role = input;}}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
