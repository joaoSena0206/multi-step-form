import Input from "../components/Input";

function PersonalInfo({ data, onInputChange }) {
	return (
		<div className="mt-5 flex flex-col space-y-4">
			<Input
				onChange={onInputChange}
				value={data.name}
				name="name"
				label="Name"
				placeholder="e.g. Stephen King"
			/>
			{}

			<Input
				onChange={onInputChange}
				value={data.email}
				name="email"
				label="Email"
				type="email"
				placeholder="e.g. stephenking@lorem.com"
			/>

			<Input
				onChange={onInputChange}
				value={data.phone}
				label="Phone Number"
				name="phone"
				type="tel"
				placeholder="e.g. Stephen King"
			/>
		</div>
	);
}

export default PersonalInfo;
