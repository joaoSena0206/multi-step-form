function Input({ name, type = "text", placeholder, onChange, value, label }) {
	return (
		<label
			htmlFor={name}
			className="flex flex-col text-[#4A5872] font-[500]">
			{label}
			<input
				value={value}
				name={name}
				onChange={onChange}
				className="border-[1px] border-[#DBDBDD] focus:outline-0 px-3 py-2"
				type={type}
				id={name}
				placeholder={placeholder}
			/>
		</label>
	);
}

export default Input;
