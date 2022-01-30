/*
    0 - Obter um usuário
    1 - Obter o número de telefone de um usuário a partir de seu Id
    2 - Obter o endereço do usuário pelo Id
*/

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

const userPromise = getUser();
// para manipular o sucesso usamos a função .then
// para manipular erros, usamos o .catch
// user -> phone -> phone
userPromise
	.then(function (user) { // todo .then() e .catch() retornam uma nova Promise
		return getPhone(user.id)
			.then(function resolvePhone(result) {
				return {  // manipula o resultado para o próximo then (de fora)
					user: {
						nome: user.name,
						id: user.id
					},
					phone: result
				}
			})
	})
	.then(function (result) {
		console.log("resultado", result);
	})
	.catch(function (error) {
		console.log("DEU RUIM", error);
	});

// getUser(function resolveUser(error, user) {
// 	//NOTE: ( null || "" || 0) === false (in Javascript)

// 	if (error) {
// 		console.error("DEU RUIM em USUÁRIO", error);
// 		return;
// 	}
//     console.log("user: ", user);

// 	getPhone(user.id, function resolvePhone(error1, phone) {
// 		if (error1) {
// 			console.error("DEU RUIM em TELEFONE", error1);
// 			return;
// 		}

// 		console.log("phone: ", phone);

// 		getAddress(user.id, function resolveAddress(error2, address) {
// 			if (error2) {
// 				console.error("DEU RUIM em ENDEREÇO", error2);
// 				return;
// 			}

// 			console.log("address: ", address);

//             console.log(`
//                 Nome: ${user.name},
//                 Telefone: (${phone.ddd}) ${phone.phone},
//                 Endereço: Rua ${address.street}, número ${address.number}
//             `)
// 		});
// 	});
// });
