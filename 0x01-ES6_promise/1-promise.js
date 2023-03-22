export default function getResponseFromAPI(success) {
	let success = true;
	let myPromise = new Promise(function(resolve, reject) {
		let success = true;
		if (success === true) {
			resolve(object {
				status: 200,
				body: 'Success'});
		} else {
			reject("The fake API is not working currently");
		}
	}
}
