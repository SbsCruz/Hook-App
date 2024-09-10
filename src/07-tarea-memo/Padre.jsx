import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

	const numeros = [2, 4, 6, 8, 10];
	const [valor, setValor] = useState(0);

	const incrementar = useCallback(
		(num) => {
			setValor((valor) => valor + num) // hay que aclarar el valor para que tome el anterio y se sume
		},
		[], // lo dejamos vacío para que solo se cree una vez la función
	)

	return (
		<div>
			<h1>Padre</h1>
			<p> Total: {valor} </p>

			<hr />

			{
				numeros.map(n => (
					<Hijo
						key={n}
						numero={n}
						incrementar={incrementar}
					/>
				))
			}
			{/* <Hijo /> */}
		</div>
	)
}
