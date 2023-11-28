import validator from 'validator';

interface IdataProps {
 username: string,
 email: string,
 password : string,
 password2: string,

}

function Registra (win: Window, doc: Document): void {
	const $inputs: NodeListOf<HTMLInputElement> = doc.querySelectorAll('input');
	const $errorM: NodeListOf<HTMLSpanElement> = doc.querySelectorAll('.error-message');
	const $divs: NodeListOf<HTMLDivElement> = doc.querySelectorAll('.form-fields');

	let Obj: IdataProps;

	$inputs.forEach((input: HTMLInputElement, index: number)=> {

		switch (input.name) {
		case 'username':
			if(validator.isEmpty(input.value) || !validator.isLength(input.value, {min: 6, max: 25})){
				$divs[index].classList.add('show-error-message');
				$errorM[index].innerHTML = 'prencha corretamente o campo user';
			}
			break;
		case 'email':
			if(validator.isEmpty(input.value) || !validator.isEmail(input.value)) {
				$divs[index].classList.add('show-error-message');
				$errorM[index].innerHTML = 'prencha corretamente o campo email';
			}
			break;
		case 'password':
			if(validator.isEmpty(input.value) || !validator.isLength(input.value, {min: 6, max: 25})) {
				$divs[index].classList.add('show-error-message');
				$errorM[index].innerHTML = 'prencha corretamente o campo senha e a senha deve ser forte';
			}
			break;
		case 'password2':
			if(validator.isEmpty(input.value) || !validator.equals(input.value, $inputs[2].value)) {
				$divs[index].classList.add('show-error-message');
				$errorM[index].innerHTML = 'a senha de confirmação é diferente da senha primaria';
			}
			break;
		}
	});

}



export {Registra};