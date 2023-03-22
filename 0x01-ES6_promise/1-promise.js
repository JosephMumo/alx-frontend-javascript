export default function getResponseFromAPI(Boolean) {
	return new Promise(function(resolve, reject) => {
		const object = {
			status: 200,
			body: 'Success'};
		if (success === true) {
			resolve(object);
		} else {
			reject(Error("The fake API is not working currently"));
		}
	)};
}
