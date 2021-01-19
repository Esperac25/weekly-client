import React, { Fragment, useState } from "react";
import config from './config';

const AddItem = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`${config.API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      .then((res) => {
        if(!res.ok) return res.json().then((e) => Promise.reject(e))
      })
      .then((item) => {
        this.props.history.push(`/items/${item.item_id}`);
      })
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