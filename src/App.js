import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import axios from 'axios';

//Components
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import Spinner from './components/Spinner/Spinner';

const App = () => {
	/*
	El primer state (value, setValue) es un estado que va a tener inicialmente un 
	string vacio. Ese estado se lo asignamos al input (componente TextField, de MUI). Ese estado, lo vamos a modificar a partir del evento onChange, capturando lo que escribe el usuario en el campo, a través del parametro que recibe la función onChangeValu (e.target.value). Ese value lo usamos luego para realizar la petición async a la api de github. Primero "sanitizamos" la variable para quitar los espacios en blanco y pasar a minúsculas nuestro string. Luego, ese valor, al que asignamos en la variable userInput, lo concatenamos en nustra url de la api (`https://api.github.com/users/${userInput}`). 
	*/
	const [value, setValues] = useState('');
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const onChangeValue = (e) => {
		// console.log(e.target.value);
		setValues(e.target.value);
	};

	const onSubmit = (e) => {
		setIsLoading(true);
		e.preventDefault();
		const userInput = value.toLowerCase().replace(/ /g, ''); // Sanitizar la variable
		// console.log(userInput);
		if (userInput) {
			axios(`https://api.github.com/users/${userInput}`).then((res) =>
				setUser(res.data)
			);
		}
		setIsLoading(false);
		setValues('');
	};

	return (
		<div className='App'>
			<Header />
			<form className='Form' onSubmit={onSubmit}>
				<TextField
					placeholder='Buscar Usuario'
					variant='outlined'
					onChange={onChangeValue}
					value={value}
					className='TextField'
				/>
				<button className='btn'>Buscar</button>
			</form>
			{isLoading ? <Spinner /> : null}
			{/* {user.id ? <CardUser data={user} /> : <p>No hiciste busqueda</p>} */}
			{/* {user.id ? <CardUser data={user} /> : null} */}

			{user.id && <CardUser data={user} />}
		</div>
	);
};

export default App;
