function StepItemIndicator({ step, isSelected }) {
	return (
		<div className="lg:flex lg:space-x-3 lg:items-center">
			<div
				className={`rounded-full border-[1px] border-white w-[35px] h-[35px] flex items-center justify-center font-bold ${
					isSelected && "bg-[#C0E2FD] text-black border-none"
				}`}>
				{step.id}
			</div>

			{window.innerWidth >= 1024 && (
				<div>
					<p className="text-[15px] text-[#8A89FF]">STEP {step.id}</p>
					<p className="font-bold">{step.stepIndicator}</p>
				</div>
			)}
		</div>
	);
}

export default StepItemIndicator;
