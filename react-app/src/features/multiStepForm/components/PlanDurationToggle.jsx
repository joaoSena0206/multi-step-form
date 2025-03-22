function PlanDurationToggle({ selectedDuration = "monthly", onToggle }) {
	return (
		<div className="flex space-x-5 bg-[#F8F9FE] mt-5 rounded-lg p-5 justify-center items-center">
			<p
				className={`font-[550]
					${selectedDuration == "monthly" ? "text-[#04285A]" : "text-[#9E9EA8]"}
				`}>
				Monthly
			</p>

			<div
				onClick={onToggle}
				className={`bg-[#04285A] p-1 rounded-2xl w-[50px] flex ${
					selectedDuration == "yearly" && "justify-end"
				}`}>
				<div className="rounded-full bg-white w-[20px] h-[20px]"></div>
			</div>

			<p
				className={`font-[550]
					${selectedDuration == "yearly" ? "text-[#04285A]" : "text-[#9E9EA8]"}
				`}>
				Yearly
			</p>
		</div>
	);
}

export default PlanDurationToggle;
