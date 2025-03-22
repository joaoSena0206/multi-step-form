import { validate } from "email-validator";

export default function validatePersonalInfo(data) {
	let errors = {
		invalid: false,
		name: "",
		email: "",
		phone: "",
	};

	let phone = data.phone.replace(/[\s\-()]/g, "");

	if (data.name == "") {
		errors.invalid = true;
		errors.name = "Name is required!";
	}

	if (data.email == "") {
		errors.invalid = true;
		errors.email = "Email is required!";
	} else if (!validate(data.email)) {
		errors.invalid = true;
		errors.email = "Invalid Email!";
	}

	if (phone == "") {
		errors.invalid = true;
		errors.phone = "Phone number is required!";
	} else if (phone.length < 11) {
		errors.invalid = true;
		errors.phone = "Phone number must be 11 digits!";
	}

	return errors;
}
