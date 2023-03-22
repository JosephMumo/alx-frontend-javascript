export default function getResponseFromAPI() {
	const success = true;
	return new Promise(function(resolve, reject) {
		if (success) {
			resolve()
		} else {
			reject()
		}
	}
}
