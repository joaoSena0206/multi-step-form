import { useReducer, useState } from "react";

import { StepIndicator, Card, StepInfo, PersonalInfo, Button } from "./";

import { steps } from "./data/data";
import { stepReducer } from "./reducers/reducers";

import validatePersonalInfo from "./utils/validatePersonalInfo";

function MultiStepForm() {
	const [step, dispatchStep] = useReducer(stepReducer, 1);
	const [personalInfo, setPersonalInfo] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [inputErrors, setInputErrors] = useState({
		name: "",
		email: "",
		phone: "",
	});
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
			renderStep = (
				<PersonalInfo
					data={personalInfo}
					onInputChange={handleInputChange}
					errors={inputErrors}
				/>
			);
			break;
	}

	function handleInputChange(e) {
		let name = e.target.name.toLowerCase();
		let value = e.target.value;

		setInputErrors({ ...inputErrors, [name]: "" });

		switch (name) {
			case "name":
				value = value.replace(
					/[0-9!@#$%^&*()_+=[{\]};:'"\\|<>/?.,`]/g,
					""
				);

				break;
		}

		setPersonalInfo({ ...personalInfo, [name]: value });
	}

	function handleNextStepClick() {
		let errors = {
			invalid: false,
		};

		switch (step) {
			case 1:
				errors = validatePersonalInfo(personalInfo);
				setInputErrors(errors);
		}

		if (!errors.invalid) {
			dispatchStep({ type: "proceeded_step" });
			return;
		}
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
							onClick={() =>
								dispatchStep({ type: "reversed_step" })
							}
							text="Previous Step"
						/>
					)}
					{!isStepAtEnd && (
						<Button
							onClick={handleNextStepClick}
							text="Next Step"
						/>
					)}
				</footer>
			</section>
		</>
	);
}

export default MultiStepForm;
