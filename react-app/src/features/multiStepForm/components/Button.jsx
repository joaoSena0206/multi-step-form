function Button({ text, onClick, isEnd }) {
	return (
		<button
			className={`p-3 rounded-md font-bold px-4 ${
				isEnd ? "bg-[#483DFF]" : "bg-[#04285C]"
			} text-white`}
			onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
