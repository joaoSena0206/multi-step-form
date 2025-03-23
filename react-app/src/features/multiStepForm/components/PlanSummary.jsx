function PlanSummary({ plan, duration, onChangeClick }) {
	return (
		<div className="flex items-center justify-between">
			<div>
				<p className="text-[#002C5D] font-[550]">
					{plan.name[0].toUpperCase() + plan.name.substring(1)} (
					{duration[0].toUpperCase() + duration.substring(1)})
				</p>
				<p
					className="text-[#9D9DA7] font-[550] underline"
					onClick={onChangeClick}>
					Change
				</p>
			</div>

			<p className="text-[#002C5D] font-[550]">
				$
				{plan.price[duration] + (duration == "monthly" ? "/mo" : "/yr")}
			</p>
		</div>
	);
}

export default PlanSummary;
