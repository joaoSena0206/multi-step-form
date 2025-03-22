import InputError from "./InputError";

function Input({
	name,
	type = "text",
	placeholder,
	onChange,
	value,
	label,
	error,
	ref,
}) {
	return (
		<>
			<label
				htmlFor={name}
				className="flex flex-col text-[#4A5872] font-[500]">
				{label}
				<input
					ref={ref}
					value={value}
					name={name}
					onChange={onChange}
					className={`border-[1px] ${
						error == "" ? "border-[#DBDBDD]" : "border-[#F72B2A]"
					} focus:outline-0 px-3 py-2`}
					type={type}
					id={name}
					placeholder={placeholder}
				/>
			</label>
			{error != "" && <InputError error={error} />}
		</>
	);
}

export default Input;
