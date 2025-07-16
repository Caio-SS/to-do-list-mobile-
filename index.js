/*
let x = 5
while(x < 10){
    document.write('<br> O valor do X é:' + x)
    x++
}
*/


/*
let number = 'Caio santana'

for(a = 0; a <= number.length; a++){
document.write('<br> Valor do A: '+ a)
}
*/


/*
let peso
let altura
let imc
let resultado

function calcular(event) {
    event.preventDefault()
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value

    imc = peso / (altura * altura)

    resultado = document.getElementById('resultado')

    if(imc < 17){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado você está muito abaixo do peso!'
        resultado.style.color = 'red'
    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> você está abaixo do peso!'
         resultado.style.color = 'orangered'
    }else if(imc >=18.5 && imc <24.99){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está no peso ideal!'
        resultado.style.color = 'limegreen'
    }else if(imc > 25 && imc <=29.99){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está acima do peso!'
        resultado.style.color = 'orange'
    }else if (imc >=30){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado obesidade!'
        resultado.style.color = 'red'
    }

    document.getElementById('peso').value =  ''
    document.getElementById('altura').value = ''
}
*/

/*
let teste = document.getElementById('teste')

function entrar(){
let name = prompt('Digite seu nome')
if(name === null || name ===''){
    alert('Ops algo de errado')
    teste.innerHTML = 'Clique no botão para tentar novamente'
}else{
    teste.innerHTML = 'Bem vindo ' + name + ' '

    let botaosair = document.createElement('button')
    botaosair.innerText = 'Clique para sair'
    teste.appendChild(botaosair)
    botaosair.onclick = sair
}
}

function sair(){
    alert('Até mais')
    teste.innerHTML = 'Você saiu...'
}
*/

/*
let novo = document.getElementById('novo')
let novobotao = document.getElementById('botao')


function entrar() {
   let email = document.getElementById('email').value
   let senha = document.getElementById('senha').value
   if (email === 'caiio_santana@hotmail.com' && senha === '1226') {
       novo.innerHTML = 'Você logou no site  ✅'
       novo.style.color = 'limegreen'
       let novobotao = document.getElementById('botao')
       novobotao.innerHTML = 'Sair'
       novobotao.onclick = sair
   } else {
       novo.innerHTML = 'Email ou senha errados  ❌'
       novo.style.color = 'red'
   }


}

function sair() {
   alert('Ate mais')
   novo.innerHTML = 'Você saiu'
   novobotao.innerHTML = 'Entrar novamente'
   novo.style.color = '#ff7a33'
   novobotao.onclick = entrar
   document.getElementById('email').value = ''
   document.getElementById('senha').value = ''

}
*/



/* 
let novo = document.getElementById('novo')

function bnt() {
    let opção = document.getElementById('opção').value
    opção = opção.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    let qtd = document.getElementById('qtd').value
    switch (opção) {
        case 'gasolina':
            novo.innerHTML = 'Total a pagar:' + ' R$ ' + (qtd * 5.60).toFixed(2)
            novo.style.color = 'green'
            break
        case 'alcool':
            novo.innerHTML = 'Total a pagar:' + ' R$ ' + (qtd * 4.20).toFixed(2)
            novo.style.color = 'green'
            break
        case 'diesel':
            novo.innerHTML = 'Total a pagar:' + ' R$ ' + (qtd * 4.90).toFixed(2)
            novo.style.color = 'green'
            break
        default:
            novo.innerHTML = 'OPÇÃO INVALIDA'
            novo.style.color = 'red'
    }

}
*/


/*
let text = document.getElementById('texto')
 let novobotao = document.getElementById('bnt')

function bnt1() {
    text.innerHTML = 'VOCÊ CLICOU, AGORA ESTOU VERMELHO'
    text.style.color = 'red'
    novobotao.innerHTML = 'VOLTAR AO NORMAL'
    novobotao.onclick = normal
}
function normal() {
    text.innerHTML = 'BEM VINDO'
    text.style.color = ''
    novobotao.innerHTML = 'CLIQUE PARA MUDAR A COR'
    novobotao.onclick = bnt1
}
 */
/* 
function addNewPhone() {
    const phoneForm = document.querySelector('form.phones')
    const newPhone = phoneForm.children[0].cloneNode(true)
    newPhone.querySelector("input").value = ""
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector('label').innerText = "Telefone " + phonePosition + ": "
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)
}

function printPhones() {
    let message = ''
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        message += 'Telefone' + (index + 1) + ': ' + phone.value + '\n'
    })
    alert(message)
}
*/

/*
let bnt = document.querySelector('.a').addEventListener('click', () =>{
  let novo = document.createElement('h1')
    novo.innerText = 'OI'
    document.querySelector('.iu').appendChild(novo)
    console.log(novo).value
})
*/

/*
let titulo = document.querySelector('.titulo')
let botao = document.querySelector('.bnt')

botao.addEventListener('click', ()=>{
    if(botao.innerText === 'Clique para entrar' || botao.innerText=== 'Logar novamente'){
        titulo.innerText = 'Sair da conta'
        botao.innerText= 'Sair'
    }else{
        titulo.innerText = 'Você saiu...'
        botao.innerText = 'Logar novamente'
    }
})
*/

/*
function calcular() {
    let numero1 = parseInt(document.getElementsByName('numero1')[0].value)
    let numero2 = parseInt(document.getElementsByName('numero2')[0].value)
    let operador = document.querySelector('#operador').value

    let resultado

    if (operador == '+') {
        resultado = numero1 + numero2
        console.log(resultado)
    }
    if (operador == '-') {
        resultado = numero1 - numero2
        console.log(resultado)
    }
    if (operador == '/') {
        resultado = numero1 / numero2
        console.log(resultado)
    }
    if (operador == '*') {
        resultado = numero1 * numero2
        console.log(resultado)
    }

    document.querySelector('#resultado').innerHTML = 'Toma teu resultado caralho: ' + resultado
}
*/
/*
function myName(element){
    alert('Meu primeiro nome é ' + element.value)
} 

let nome= document.querySelector('.nome').addEventListener('change' , (event)=>{
     alert('Meu primeiro nome é ' + event.target.value)
})
*/
/*
let div = document.querySelector('.lista')
let number = document.querySelector('#number')
let add = document.querySelector('#add').addEventListener('click', () => {
    
    let newDocument = document.createElement('p')
    newDocument.innerText = number.value
    document.querySelector('.lista').appendChild(newDocument)
})



function RemoveElements() {

}
*/

/*
const emailCerto = 'caiio_santana@hotmail.com'
const senhaCerta = '1226'

function verify() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (email != '' && senha != '') {
        let toCall = verifyEmailSenha(email, senha)

        if (toCall == true) {
            alert('Login efetuado com sucesso')
        } else {
            alert('E-mail e/ou senha invalídos')
        }
    } else {
        alert('Por favor preencha os campos')
    }
}


function verifyEmailSenha(email, senha) {
    if (email == emailCerto && senha == senhaCerta) {
        return true
    } else {
        return false
    }

}
let bnt = document.querySelector('#bnt1')
bnt.addEventListener('click', verify)
*/

/*
let button = document.querySelector('.bnt').addEventListener('click', () => {

    let options = document.getElementById('options').value
    let litros = document.getElementById('litros').value
    let results = document.querySelector('.valor')


    if (options === 'gasolina') {
        results.innerHTML = `${litros * 6.69.toFixed(2)}`
    }
    if (options === 'alcool') {
        results.innerHTML = `${litros * 5.25.toFixed(2)}`
    }
    if (options === 'diesel') {
        results.innerHTML = `${litros * 5.90.toFixed(2)}`
    }


})
/*
alert(`Total: R$ ${(litros * 6.60).toFixed(2)}`)
alert(`Total: R$ ${(litros * 4.60).toFixed(2)}`)
alert(`Total: R$ ${(litros * 5.90).toFixed(2)}`)
*/
/*
const EmailCerto = 'caiio_santana@hotmail.com'
const senhaCerta = '1226'

document.getElementById('bnt').addEventListener('click', () => {
    let email = document.querySelector('#email').value
    let senha = document.querySelector('#senha').value
    let novo = document.getElementById('novo')


    if (email != '' && senha != '') {
        let retorno = dados(email, senha)

        if (retorno === true) {
            novo.textContent = 'Parabens, login efetuado com sucesso'
        } else {
            novo.innerText = 'Email e/ou senha incorretos'
        }

    } else {
        novo.innerText = 'Por favor, preencha os campos'
    }
})


function dados(email, senha) {
    if (email === EmailCerto && senha === senhaCerta) {
        return true
    } else {
        return false
    }
}
*/


let inputTask = document.querySelector('#input-task')
let addTask = document.querySelector('#add-tasks')
let addButton = document.querySelector('#addButton')

addButton.addEventListener('click', () => {
    let text = inputTask.value.trim()
    if (text !== '') {
        const li = document.createElement('li')
        li.innerHTML = `
        <input type="checkbox" class = 'box'>
        <span> ${text}</span>
        <button class = "editButton">Editar</button>
        <button class = "removeButton">Remover</button>
        
        `
        addTask.appendChild(li)
        li.querySelector('.editButton').addEventListener('click', function () {
            editButton(this)
        })
        li.querySelector('.removeButton').addEventListener('click', function () {
            removeButton(this)
        })
        const checkbox = li.querySelector('.box')
        const span = li.querySelector('span')

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                span.classList.add('task-completed')
            } else {
                span.classList.remove('task-completed')
            }
        })

    }
})

function editButton(button) {
    const li = button.parentElement
    const span = li.querySelector('span')
    const newText = prompt('Editar tarefa', span.textContent)
    if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.trim()
        document.getElementById('#input-task').value = ''
    }

}

function removeButton(button) {
    const li = button.parentElement
    addTask.removeChild(li)
}