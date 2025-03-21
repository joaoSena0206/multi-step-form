import { useState } from "react";

import { StepIndicator, Card, StepInfo, PersonalInfo } from "./";

import { steps } from "./data/data";

function MultiStepForm() {
	const [step, setStep] = useState(1);
	const selectedStep = steps.find((s) => s.id == step);
	let renderStep;

	switch (step) {
		case 1:
			renderStep = <PersonalInfo />;
			break;
	}

	return (
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
		</section>
	);
}

export default MultiStepForm;
