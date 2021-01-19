import React, { Fragment, useContext, useState } from "react";
import config from './config';
import {context} from './context';

const AddItem = () => {
  const [description, setDescription] = useState("");
  const [ setItems] = useState('');
  const { addItems } = useContext(context)

  
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`${config.API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      addItems(response.data)
      setItems('')
      .then( window.location='/home')
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className='add-logo'>Add Item</h1>
      <div className='box-2'>
      <form className='' onSubmit={onSubmitForm}>
        <input
          type="text"
          className='form'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className='button'>Add</button>
      </form>
      </div>
      
    </Fragment>
  );
};

export default AddItem;