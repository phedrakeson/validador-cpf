import ValidarCPF from './modules/validar-cpf.js';


const cpf = document.querySelector('#cpf')
const validarCPF = new ValidarCPF(cpf).iniciar();

console.log(validarCPF.formatar('04527179063'))