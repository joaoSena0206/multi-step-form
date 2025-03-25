export const addons = [
	{
		id: 1,
		name: "Online service",
		description: "Access to multiplayer games",
		price: {
			monthly: 1,
			yearly: 10,
		},
	},
	{
		id: 2,
		name: "Larger storage",
		description: "Extra 1TB of cloud save",
		price: {
			monthly: 2,
			yearly: 20,
		},
	},
	{
		id: 3,
		name: "Customizable profile",
		description: "Custom theme on your profile",
		price: {
			monthly: 2,
			yearly: 20,
		},
	},
];

export const plans = [
	{
		id: 1,
		name: "arcade",
		price: {
			monthly: 9,
			yearly: 90,
		},
	},
	{
		id: 2,
		name: "advanced",
		price: {
			monthly: 12,
			yearly: 120,
		},
	},
	{
		id: 3,
		name: "pro",
		price: {
			monthly: 15,
			yearly: 150,
		},
	},
];

export const steps = [
	{
		id: 1,
		title: "Personal info",
		description:
			"Please provide your name, email address, and phone number.",
		stepIndicator: "YOUR INFO",
	},
	{
		id: 2,
		title: "Select your plan",
		description: "You have the option of monthly or yearly billing.",
		stepIndicator: "SELECT PLAN",
	},
	{
		id: 3,
		title: "Pick add-ons",
		description: "Add-ons help enhance your gaming experience.",
		stepIndicator: "ADD-ONS",
	},
	{
		id: 4,
		title: "Finishing up",
		description: "Double-check everything looks OK before confirming.",
		stepIndicator: "SUMMARY",
	},
];
