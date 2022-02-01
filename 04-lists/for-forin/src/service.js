const axios = require("axios");
const BASE_URL = `https://swapi.dev/api/people`;

async function getPeople(name) {
	const url = `${BASE_URL}/?search=${name}&format=json`;

	const response = await axios.get(url);
	return response.data;
}

module.exports = { getPeople }