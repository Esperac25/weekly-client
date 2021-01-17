import React, { Fragment, useState } from "react";
import config from '../config';

const AddItem = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`${config.API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/home";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Add Item</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default AddItem;