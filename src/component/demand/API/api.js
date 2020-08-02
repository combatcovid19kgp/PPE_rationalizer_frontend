import axios from 'axios';

export const getRoleItems = async (scenario, role) => {
	console.log(role,scenario);
	let response = await axios
		.get("http://ppe-rationalizer.herokuapp.com/roleitem/admin/", {
			params: {
				scenario: scenario,
				role: role,
			},
		});
	let itemsArray = response.data;
	console.log(itemsArray)
	return itemsArray;
}


