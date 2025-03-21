import { useReducer } from "react";

import { StepIndicator, Card, StepInfo, PersonalInfo, Button } from "./";

import { steps } from "./data/data";
import stepReducer from "./reducers/stepReducer";

function MultiStepForm() {
	const [step, dispatchStep] = useReducer(stepReducer, 1);
	const selectedStep = steps.find((s) => s.id == step);

	let renderStep;
	let isStepAtEnd = step == steps.length;
	let isStepAtStart = step == 1;
	let btnAlignment = isStepAtEnd
		? "justify-start"
		: isStepAtStart
		? "justify-end"
		: "justify-between";

	switch (step) {
		case 1:
			renderStep = <PersonalInfo />;
			break;
	}

	return (
		<>
			<section className="bg-[#EDF4FE] h-screen">
				<StepIndicator selectedStep={step} steps={steps} />

				<div className="p-5">
					<Card>
						<StepInfo
							title={selectedStep.title}
							description={selectedStep.description}
						/>

						{renderStep}
					</Card>
				</div>

				<footer
					className={`absolute bottom-0 p-5 bg-white w-full h-[90px] flex items-center ${btnAlignment}`}>
					{!isStepAtStart && (
						<Button
							onClick={() => {
								dispatchStep({ type: "reversed_step" });
							}}
							text="Previous Step"
						/>
					)}
					{!isStepAtEnd && (
						<Button
							onClick={() => {
								dispatchStep({ type: "proceeded_step" });
							}}
							text="Next Step"
						/>
					)}
				</footer>
			</section>
		</>
	);
}

export default MultiStepForm;
