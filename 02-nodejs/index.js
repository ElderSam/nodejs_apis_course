/*
    0 - Obter um usuário
    1 - Obter o número de telefone de um usuário a partir de seu Id
    2 - Obter o endereço do usuário pelo Id
*/
// importamos um módulo interno do Node.js
const util = require("util");
const getAddressAsync = util.promisify(getAddress);

function getUser() {
	// quando der algum problema -> reject(ERRO)
	// quando success -> RESOLVE
	return new Promise(function resolvePromise(resolve, reject) {
		setTimeout(function () {
			// return reject(new Error('DEU RUIM DE VERDADE!'))

			return resolve({
				id: 1,
				name: "Aladin",
				birthDate: new Date(),
			});
		}, 1000);
	});
}

function getPhone(userId) {
	return new Promise(function resolvePromise(resolve, reject) {
		setTimeout(() => {
			return resolve({
				phone: "997251020",
				ddd: 11,
			});
		}, 2000);
	});
}

function getAddress(userId, callback) {
	setTimeout(() => {
		return callback(null, {
			street: "dos bobos",
			number: 0,
		});
	}, 2000);
}

// 1º passo - adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main() {
	try {
		console.time('medida-promise') // captura velocidade (tempo de execução) de uma função
		const user = await getUser();
		// const phone = await getPhone(user.id);
		// const address = await getAddressAsync(user.id)
		const result = await Promise.all([ // chamar promises (requisições) em paralelo
			getPhone(user.id),
			getAddressAsync(user.id)
		])

		const phone = result[0]
		const address = result[1]

	console.log(`
			Nome: ${user.name}
			Telefone: (${phone.ddd}) ${phone.phone}
			Endereço: ${address.street}, ${address.number}
		`);
		console.timeEnd('medida-promise')
	} catch(error) {
		console.error('DEU RUIM', error)
	}
}