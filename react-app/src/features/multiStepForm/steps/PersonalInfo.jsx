import Input from "../components/Input";

function PersonalInfo() {
	return (
		<div className="mt-5 flex flex-col space-y-4">
			<Input name="Name" placeholder="e.g. Stephen King" />

			<Input
				name="Email"
				type="email"
				placeholder="e.g. stephenking@lorem.com"
			/>

			<Input
				name="Phone Number"
				type="email"
				placeholder="e.g. Stephen King"
			/>
		</div>
	);
}

export default PersonalInfo;
