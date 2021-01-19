import React, { Fragment, useEffect, useState } from "react";
import config from './config';

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

  
  return (
    <Fragment>
      {" "}
      <div>
      <h1 className='weekly-view-logo'>Weekly View</h1>
      <div className='total'>
                <section>
                <div className='total'>
                    <p>You have {items.length} items left to do this week</p>
                    <p>Keep it up!</p>
                </div>
                </section>
            </div>
      </div>
      <div className='box-2'>
      <table>
        <tbody>
          {items.map(item => (
            <tr key={item.item_id}>
              <td>{item.description}</td>
              <td>
              
              </td>
              <td>
                <button
                  className="button"
                  onClick={() => deleteItem(item.item_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  );
};

export default Home;