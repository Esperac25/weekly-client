import React, { createContext, useState, useEffect } from 'react';
import config from './config';

export const WeeklyContext = createContext();

export default function WeeklyProvider(props) {
	const [items, setItems] = useState([]);

	const addItem = (item) => setItems([...items, item]);

	const deleteItem = async (id) => {
		try {
			await fetch(`${config.API_URL}/items/${id}`, {
				method: 'DELETE'
			});

			setItems(items.filter((item) => item.item_id !== id));
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

	return (
		<WeeklyContext.Provider
			value={{
				items,
				addItem,
				getItems,
				deleteItem
			}}>
			{props.children}
		</WeeklyContext.Provider>
	);
}
