import { useState } from "react";

import { StepIndicator } from "./";

function MultiStepForm() {
	const [step, setStep] = useState(1);

	return (
		<section className="bg-[#EDF4FE] h-screen">
			<StepIndicator selectedStep={step} />
		</section>
	);
}

export default MultiStepForm;
