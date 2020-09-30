import React from 'react';

import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import styles from './Card.module.css';
import cx from 'classnames';

import CountUp from 'react-countup';

function CardComponent({ title, body, value, lastUpdate, className }) {
	return (
		<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[className])}>
			<CardContent>
				<Typography color='textSecondary' gutterBottom>
					{title}
				</Typography>
				<Typography varaint='h5'>
					<CountUp start={0} end={value} duration={2.5} separator=',' />
				</Typography>
				<Typography color='textSecondary'>{lastUpdate}</Typography>
				<Typography varaint='body2'>{body}</Typography>
			</CardContent>
		</Grid>
	);
}

export default CardComponent;
