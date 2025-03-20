function StepItemIndicator({ step }) {
	return (
		<div className="rounded-full border-[1px] border-white text-white w-[35px] h-[35px] flex items-center justify-center font-bold">
			{step}
		</div>
	);
}

export default StepItemIndicator;
