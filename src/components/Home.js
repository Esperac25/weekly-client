import React, { Fragment, useEffect, useState } from "react";
import config from '../config';

import EditItem from "./EditItem";

const Home = () => {
  const [items, setItems] = useState([]);

  //delete item function

  const deleteItem = async id => {
    try {
      const deleteItem = await fetch(`${config.API_URL}/items/${id}`, {
        method: "DELETE"
      });

      setItems(items.filter(item => item.item_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getItems = async () => {
    try {
      const response = await fetch(`${config.API_URL}/items`);
      const jsonData = await response.json();

      setItems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log(items);

  // const itemsLeft = this.state.items.length
  // const itemNoun = itemsLeft.length !== 1 ? 'items' : 'item';
  return (
    <Fragment>
      {" "}
      <div>
      <h1>Weekly View</h1>
      <div className='total'>
                <section>
                <div>
                    {/* <p className='total-p'>You have {itemsLeft} {itemNoun} left to do this week</p> */}
                    <p className='total-p'>Keep it up!</p>
                </div>
                </section>
            </div>
      </div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {items.map(item => (
            <tr key={item.item_id}>
              <td>{item.description}</td>
              <td>
                <EditItem item={item} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(item.item_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Home;