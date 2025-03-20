import StepItemIndicator from "./StepItemIndicator";

function StepIndicator({ selectedStep }) {
	return (
		<div
			className={`bg-[url("src/features/multiStepForm/images/bg-sidebar-mobile.svg")] h-[172px]`}>
			<ul className="flex justify-center space-x-5 p-5 py-10">
				<StepItemIndicator step={1} />
				<StepItemIndicator step={2} />
				<StepItemIndicator step={3} />
				<StepItemIndicator step={4} />
			</ul>
		</div>
	);
}

export default StepIndicator;
