<!doctype html>

<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script>
var create = function (resource, data, callback) {
	/**
	 * @param {String} resource
	 * @param {Object} data
	 * @param {Function} callback
	 */
	$.ajax({
		method: 'POST',
		url: 'https://webdev-c9-alexandrutopliceanu.c9.io/' + resource,
		dataType: 'json',
		data: data,
		success: function onSuccess(data) {
			callback(null, data);
		},
		error: function onError(error) {
			callback(error);
		}
	});
};

var read = function (callback) {
	/**
	 * @param {String} resource
	 * @param {Function} callback
	*/
	$.ajax({
		method: 'GET',
		url: 'http://api.viglink.com/api/click?key=29e3d375bf4f9bffd8e280587345bd05&out=http%3A%2F%2Fwww.ebay.com%2Fitm%2FNew-HTC-One-M7-32GB-Silver-AT-amp-T-Unlocked-Smartphone-%2F151330538805%3F%26_trksid%3Dp2056016.m2518.l4276&loc=https://www.hagg.ro',
		success: function onSuccess(data) {
			callback(null, data);
		},
		error: function onError(error) {
			callback(error);
		}
	});
};

//create('users', {name: 'Iulian'}, function (error, data) { // functie anonimă
//	if (error) console.log('Eroare:', error.message);
//	else console.log('Success:', data);
//});

read(function (error, data) {
	if (error) console.log('Eroare:', error.message);
	else console.log('Success:', JSON.stringify(data));
});

//setTimeout(function() {
//	console.log('something');
//}, 10000);

</script>
