import Input from "../components/Input";
import { useMask } from "@react-input/mask";

function PersonalInfo({ data, onInputChange, errors }) {
	const phoneRef = useMask({
		mask: "(__) _____-____",
		replacement: { _: /\d/ },
	});

	return (
		<div className="mt-5 flex flex-col space-y-4">
			<Input
				onChange={onInputChange}
				value={data.name}
				name="name"
				label="Name"
				error={errors["name"]}
				placeholder="e.g. Stephen King"
			/>

			<Input
				onChange={onInputChange}
				value={data.email}
				name="email"
				label="Email"
				type="email"
				error={errors["email"]}
				placeholder="e.g. stephenking@lorem.com"
			/>

			<Input
				onChange={onInputChange}
				value={data.phone}
				label="Phone Number"
				name="phone"
				type="tel"
				ref={phoneRef}
				error={errors["phone"]}
				placeholder="e.g. Stephen King"
			/>
		</div>
	);
}

export default PersonalInfo;
