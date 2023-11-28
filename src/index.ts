
import * as registro from './others/registrar';


const $button: HTMLFormElement = document.querySelector('form')!;

$button.addEventListener('submit',(e)=>{
	e.preventDefault();
	console.log('a');

	registro.Registra(window, document);
});