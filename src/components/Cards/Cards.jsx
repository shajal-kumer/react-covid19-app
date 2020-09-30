import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';

import CardComponent from './Card/Card';

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
	if (!confirmed) return 'Loading...';

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				<CardComponent
					title='Confirmed'
					body='Number of active cases of COVID-19.'
					value={confirmed.value}
					lastUpdate={lastUpdate}
					className='infected'
				/>
				<CardComponent
					title='Recovered'
					body='Number of recoveres from COVID-19.'
					value={recovered.value}
					lastUpdate={lastUpdate}
					className='recovered'
				/>
				<CardComponent
					title='Deaths'
					body='Number of deaths caused by COVID-19.'
					value={deaths.value}
					lastUpdate={lastUpdate}
					className='deaths'
				/>
			</Grid>
		</div>
	);
}

export default Cards;
