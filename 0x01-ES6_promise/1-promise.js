export default function getResponseFromAPI(success) {
	let myPromise = new Promise(function(resolve, reject) {
		let object = {
			status: 200,
			body: 'Success'};
		if (success === true) {
			resolve(object);
		} else {
			reject("The fake API is not working currently");
		}
	};
};
