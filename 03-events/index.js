// const EventEmitter = require('events')

// class MyEmitter extends EventEmitter { // Meu Emissor

// }

// const myEmitter = new MyEmitter()
// const EventName = 'user:click'

// myEmitter.on(EventName, function (click) { // observador
//     console.log('um usuário clicou', click)
// })

// myEmitter.emit(EventName, 'na barra de rolagem')
// myEmitter.emit(EventName, 'no ok')

// let count = 0
// setInterval(() => {
//     myEmitter.emit(EventName, 'no ok' + (count++))
// }, 1000)


/* ----------------------------------------------------------------- */
const stdin = process.openStdin()
console.log('digite algo')

stdin.addListener('data', function (value) { // toda vez que digita uma entrada no terminal, dispara a função no addListener
    console.log(`Você digitou: ${value.toString().trim()}`)
})

// Exemplo incorreto -------------------------------------
// function main() {
//     // nesse exemplo não funciona, porque a ideia da Promise é executar uma única vez
//     return new Promise(function (resolve, reject) {
//         stdin.addListener('data', function (value) { // toda vez que digita uma entrada no terminal, dispara a função no addListener
//             // console.log(`Você digitou: ${value.toString().trim()}`)
//             return resolve(value)
//         })
//     }) 
// }

// main().then(function (resultado) {
//     console.log('resultado:', resultado.toString())
// })