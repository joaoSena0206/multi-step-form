function StepItemIndicator({ step, isSelected }) {
	return (
		<div
			className={`rounded-full border-[1px] border-white w-[35px] h-[35px] flex items-center justify-center font-bold ${
				isSelected && "bg-[#C0E2FD] text-black border-none"
			}`}>
			{step}
		</div>
	);
}

export default StepItemIndicator;
