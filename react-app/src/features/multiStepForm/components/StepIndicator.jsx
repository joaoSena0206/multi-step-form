import StepItemIndicator from "./StepItemIndicator";

function StepIndicator({ selectedStep, steps }) {
	return (
		<div
			className={`bg-[url("src/features/multiStepForm/images/bg-sidebar-mobile.svg")] h-[172px] bg-no-repeat bg-cover`}>
			<ul className="flex justify-center space-x-5 p-5 py-10 text-white">
				{steps.map((step) => {
					return (
						<li key={step.id}>
							<StepItemIndicator
								step={step.id}
								isSelected={selectedStep == step.id}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default StepIndicator;
