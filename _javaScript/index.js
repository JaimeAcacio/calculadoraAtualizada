import createLayout from './layout.js'
import funcionalidades from './funcoes.js'

const layout = createLayout()
const funcoes = funcionalidades()


layout.form.addEventListener('click',funcoes.clicked)
