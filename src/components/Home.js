import React, { Fragment, useContext } from 'react';

import { WeeklyContext } from '../WeeklyProvider';

const Home = () => {
	const context = useContext(WeeklyContext);

	return (
		<Fragment>
			{' '}
			<div>
				<h1 className='weekly-view-logo'>Weekly View</h1>
				<div className='total'>
					<section>
						<div className='total'>
							<p>You have {context.items.length} items left to do this week</p>
							<p>Keep it up!</p>
						</div>
					</section>
				</div>
			</div>
			<div className='box-2'>
				<table>
					<tbody>
						{context.items.map((item) => (
							<tr key={item.item_id}>
								<td>{item.description}</td>
								<td></td>
								<td>
									<button
										className='button'
										onClick={() => context.deleteItem(item.item_id)}>
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
