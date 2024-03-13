function en_to_bn_number_conversion(en_number) {
	var bn_number = '';
	for (var i = 0; i < en_number.length; i++) {
		if (en_number[i] == '0') bn_number = bn_number + "০";
		if (en_number[i] == '1') bn_number = bn_number + "১";
		if (en_number[i] == '2') bn_number = bn_number + "২";
		if (en_number[i] == '3') bn_number = bn_number + "৩";
		if (en_number[i] == '4') bn_number = bn_number + "৪";
		if (en_number[i] == '5') bn_number = bn_number + "৫";
		if (en_number[i] == '6') bn_number = bn_number + "৬";
		if (en_number[i] == '7') bn_number = bn_number + "৭";
		if (en_number[i] == '8') bn_number = bn_number + "৮";
		if (en_number[i] == '9') bn_number = bn_number + "৯";
		if (en_number[i] == ':') bn_number = bn_number + ":";
		if (en_number[i] == 'am') bn_number = bn_number + "asjg";
	}
	return bn_number;
}

// get current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
        console.log("Geo location is not supported by this browser");
    }
}
// getLocation();
setInterval(getLocation, 0);

// Set current date and time on card header
function setCurrentDateTime() {
	document.getElementById("currentDateTime").innerHTML = moment().format('Do MMMM YYYY, h:mm:ss a');
	if($("input[name='lang']:checked").val() === 'bn'){
		moment.locale('bn');

		} else{
		moment.locale('en');

		}
}
setInterval(setCurrentDateTime, 0);