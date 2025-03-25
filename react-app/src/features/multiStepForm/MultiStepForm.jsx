import { useReducer, useState } from "react";

import {
	StepIndicator,
	Card,
	StepInfo,
	PersonalInfo,
	Button,
	PlanSelection,
	PickAddons,
	Conclusion,
	Confirmation,
} from "./";

import { steps, plans, addons } from "./data/data";
import { stepReducer, planReducer, addonReducer } from "./reducers/reducers";

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
	const [plan, dispatchPlan] = useReducer(planReducer, {
		id: 1,
		duration: "monthly",
	});
	const [selectedAddons, dispatchSelectedAddons] = useReducer(
		addonReducer,
		[]
	);
	const [hasFormSubmitted, setHasFormSubmitted] = useState(false);
	const selectedStep = steps.find((s) => s.id == step);

	let renderStep;
	let isStepAtEnd = step == steps.length;
	let isStepAtStart = step == 1;
	let btnAlignment = isStepAtEnd
		? "justify-between"
		: isStepAtStart
		? "justify-end"
		: "justify-between";

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

		case 2:
			renderStep = (
				<PlanSelection
					plans={plans}
					selectedPlan={plan}
					dispatch={dispatchPlan}
				/>
			);
			break;

		case 3:
			renderStep = (
				<PickAddons
					addons={addons}
					duration={plan.duration}
					selectedAddons={selectedAddons}
					dispatch={dispatchSelectedAddons}
				/>
			);
			break;

		case 4:
			renderStep = hasFormSubmitted ? (
				<Confirmation />
			) : (
				<Conclusion
					plan={plans.find((p) => p.id == plan.id)}
					addons={addons.filter((a) => selectedAddons.includes(a.id))}
					duration={plan.duration}
					onChangePlan={() =>
						dispatchStep({
							type: "changed_step",
							step: 2,
						})
					}
				/>
			);
	}

	let windowWidth = window.innerWidth;

	return (
		<>
			<section className="bg-[#EDF4FE] h-screen lg:flex lg:p-5 lg:bg-white lg:space-x-0">
				<StepIndicator selectedStep={step} steps={steps} />

				<div className="p-5 lg:p-0 lg:w-full lg:flex lg:justify-center lg:items-center">
					<Card>
						{!hasFormSubmitted && (
							<StepInfo
								title={selectedStep.title}
								description={selectedStep.description}
							/>
						)}

						{renderStep}

						{windowWidth >= 1024 && !hasFormSubmitted && (
							<div
								className={`mt-10 flex items-bottom ${btnAlignment}`}>
								{!isStepAtStart && (
									<p
										className="text-[#A5A5AF] font-[550]"
										onClick={() =>
											dispatchStep({
												type: "reversed_step",
											})
										}>
										Go Back
									</p>
								)}

								<Button
									isEnd={isStepAtEnd}
									onClick={
										isStepAtEnd
											? () => setHasFormSubmitted(true)
											: handleNextStepClick
									}
									text={isStepAtEnd ? "Confirm" : "Next Step"}
								/>
							</div>
						)}
					</Card>
				</div>

				{windowWidth < 1024 && !hasFormSubmitted && (
					<footer
						className={`absolute bottom-0 p-5 bg-white w-full h-[90px] flex items-center ${btnAlignment}`}>
						{!isStepAtStart && (
							<p
								className="text-[#A5A5AF] font-[550]"
								onClick={() =>
									dispatchStep({ type: "reversed_step" })
								}>
								Go Back
							</p>
						)}

						<Button
							isEnd={isStepAtEnd}
							onClick={
								isStepAtEnd
									? () => setHasFormSubmitted(true)
									: handleNextStepClick
							}
							text={isStepAtEnd ? "Confirm" : "Next Step"}
						/>
					</footer>
				)}
			</section>
		</>
	);
}

export default MultiStepForm;
