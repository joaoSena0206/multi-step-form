function PlanOption({ plan, isSelected, onPlanClick, duration }) {
	return (
		<div
			className={`flex items-center space-x-3 border-[1px] rounded-lg p-5 ${
				isSelected
					? "border-[#544C99] bg-[#F8F9FE]"
					: "border-[#DBDBDD]"
			}`}
			onClick={onPlanClick}>
			<img
				className="w-[50px]"
				src={`src/features/multiStepForm/icons/icon-${plan.name}.svg`}
				alt={plan.name}
			/>

			<div>
				<h2 className="text-[#002C5D] font-bold">
					{plan.name[0].toUpperCase() + plan.name.substring(1)}
				</h2>

				<p className="text-[#a1a1a9]">
					$
					{plan.price[duration] +
						(duration == "monthly" ? "/mo" : "/yr")}
				</p>
			</div>
		</div>
	);
}

export default PlanOption;
