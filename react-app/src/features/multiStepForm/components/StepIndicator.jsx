import StepItemIndicator from "./StepItemIndicator";

function StepIndicator({ selectedStep, steps }) {
	return (
		<div
			className={`bg-[url("src/features/multiStepForm/images/bg-sidebar-mobile.svg")] h-[172px] w-screen bg-no-repeat bg-cover bg-bottom 
 			lg:h-full lg:w-[400px] lg:p-7 lg:pt-0 lg:rounded-lg`}>
			<ul className="flex justify-center space-x-5 p-5 py-10 text-white lg:block lg:space-y-5">
				{steps.map((step) => {
					return (
						<li key={step.id}>
							<StepItemIndicator
								step={step}
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
