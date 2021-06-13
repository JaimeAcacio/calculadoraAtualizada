const form = document.querySelector('form')
const layout = ['input','br',1,2,3,'CE','br',4,5,6,'+','br',7,8,9,'-','br',0,'/','*','=']

const load = () => {
	const template = layout.reduce((acc,item)=>{
		if(item =="input"){
			return acc += `<input type="text" class="visor"/>`	
			}
		else if(item == "br") {
			return	acc += `<br>`
			}
		else {
			return acc += `<button class ="botao">${item}</button>`
		}
	},"")
	
	form.innerHTML += template	
}
document.onload = load()

const visor = document.querySelector('input')
	
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
form.addEventListener('click',clicked)