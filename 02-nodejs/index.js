/*
    0 - Obter um usuário
    1 - Obter o número de telefone de um usuário a partir de seu Id
    2 - Obter o endereço do usuário pelo Id
*/

function getUser() {
	setTimeout(function () {
		return {
			id: 1,
			name: "Aladin",
			birthDate: new Date(),
		};
	}, 1000);
}

function getPhoneById(userId) {
	setTimeout(() => {
		return {
			phone: "1199002",
			ddd: 11,
		};
	}, 2000);
}

function getAddressById(userId) {}

const user = getUser();
// const phone = getPhoneById(user.id);
console.log("user: ", user);
// console.log("phone: ", phone);
