function PlanOption({ plan }) {
	return (
		<div className="flex items-center space-x-3 border-[1px] border-[#DBDBDD] rounded-lg p-5">
			<img
				className="w-[50px]"
				src={`src/features/multiStepForm/icons/icon-${plan.name}.svg`}
				alt={plan.name}
			/>

			<div>
				<h2 className="text-[#002C5D] font-bold">
					{plan.name[0].toUpperCase() + plan.name.substring(1)}
				</h2>

				<p className="text-[#a1a1a9]">${plan.price.monthly}/mo</p>
			</div>
		</div>
	);
}

export default PlanOption;
