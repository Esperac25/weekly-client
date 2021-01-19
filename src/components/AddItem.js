import React, { Fragment, useContext, useState } from 'react';
import config from '../config';
import { WeeklyContext } from '../WeeklyProvider';
import history from '../history';

const AddItem = () => {
	const [description, setDescription] = useState('');
	const context = useContext(WeeklyContext);

	const handleChange = (e) => setDescription(e.target.value);

	const onSubmitForm = (e) => {
		e.preventDefault();
		const data = { description };
		try {
			fetch(`${config.API_URL}/items`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})
				.then((response) => response.json())
				.then((data) => context.addItem(data));
			setDescription('');
			history.push('/home');
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<h1 className='add-logo'>Add Item</h1>
			<div className='box'>
				<form className='' onSubmit={onSubmitForm}>
					<input
						type='text'
						className='form'
						value={description}
						onChange={handleChange}
					/>
					<button className='button'>Add</button>
				</form>
			</div>
		</Fragment>
	);
};

export default AddItem;
