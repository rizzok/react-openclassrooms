import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const initialValue = '';
	const [inputValue, setInputValue] = useState(initialValue)

	function handleInput(e) {
		setInputValue(e.target.value);
	}
	
	function handleSubmit(e) {
		e.preventDefault();
		if (!inputValue.includes('@')) {
			alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.');
		} else {
			setInputValue(initialValue);
			alert('Votre inscription à bien été prise en compte.');
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					placeholder='Votre e-mail'
					value={inputValue} 
					onChange={handleInput} 
				/>
				<button type="submit">OK</button>
			</form>
		</footer>
	)
}

export default Footer
