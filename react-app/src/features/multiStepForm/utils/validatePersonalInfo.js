export default function validatePersonalInfo(data) {
	let errors = {
		invalid: false,
		name: "",
		email: "",
		phone: "",
	};

	if (data.name == "") {
		errors.invalid = true;
		errors.name = "Name is required!";
	}

	if (data.email == "") {
		errors.invalid = true;
		errors.email = "Email is required!";
	}

	if (data.phone == "") {
		errors.invalid = true;
		errors.phone = "Phone number is required!";
	}

	return errors;
}
