import { visor } from './layout.js'

function funcionalidades(){
	const limpar = () => visor.value = ''

	const preencher = (valor) => visor.value += valor

	const calcular = () => {
		if (visor.value =='') {
			alert("o campo esta vazio!!");
			limpar()
		}
		else{
			const resultado = visor.value
			limpar()
			//uso o elemento "eval" que faz operacoes com strings passadas.
			visor.value = eval(resultado);
		}
	}

	const objFuncoes = {
	CE : limpar,
	1 : preencher,
	2 : preencher,
	3 : preencher,
	4 : preencher,
	5 : preencher,
	6 : preencher,
	7 : preencher,
	8 : preencher,
	9 : preencher,
	0 : preencher,
	"+" : preencher,
	"-" : preencher,
	"/" : preencher,
	"*" : preencher,
	"=" : calcular
	}
	
	const clicked = (event) => {
		event.preventDefault()
		const keyPressed = event.target.textContent
		if(objFuncoes[keyPressed]){
			objFuncoes[keyPressed](keyPressed)
		}	
	}

	return{ clicked }
}	
export default funcionalidades