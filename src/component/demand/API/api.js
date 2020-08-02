import axios from 'axios';

const BASE_URL = "http://ppe-rationalizer.herokuapp.com/roleitem/admin/";

export const getRoleItems = async (scenario, role) => {
	console.log(role,scenario);
	let response = await axios
		.get(BASE_URL, {
			params: {
				scenario: scenario,
				role: role,
			},
		});
	let itemsArray = response.data;
	console.log(itemsArray)
	return itemsArray;
}


