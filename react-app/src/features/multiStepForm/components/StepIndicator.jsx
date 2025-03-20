import StepItemIndicator from "./StepItemIndicator";

const STEPS_AMOUNT = 4;

function StepIndicator({ selectedStep }) {
	let steps = [];

	for (let i = 0; i < STEPS_AMOUNT; i++) {
		let stepNow = i + 1;

		steps[i] = (
			<li>
				<StepItemIndicator
					step={stepNow}
					isSelected={selectedStep == stepNow}
				/>
			</li>
		);
	}

	return (
		<div
			className={`bg-[url("src/features/multiStepForm/images/bg-sidebar-mobile.svg")] h-[172px]`}>
			<ul className="flex justify-center space-x-5 p-5 py-10 text-white">{steps}</ul>
		</div>
	);
}

export default StepIndicator;
