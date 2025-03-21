function Button({ text, onClick }) {
	return (
		<button
			className="p-3 rounded-md font-bold px-4 bg-[#04285C] text-white"
			onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
