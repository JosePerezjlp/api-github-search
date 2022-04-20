import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const CardUser = ({ data }) => {
	return (
		<Card
			sx={{ maxWidth: 345 }}
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				marginBottom: 40,
			}}
		>
			<CardMedia component='img' image={data.avatar_url} alt='green iguana' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{data.login}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{data.bio}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{data.location}
				</Typography>
				<CardActions>
					<Button size='large' variant='contained' href={data.html_url}>
						Profile
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default CardUser;
