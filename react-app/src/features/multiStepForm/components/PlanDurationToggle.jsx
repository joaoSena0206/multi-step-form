function PlanDurationToggle({ selectedDuration = "monthly" }) {
	return (
		<div className="flex space-x-5 bg-[#F8F9FE] mt-5 rounded-lg p-5 justify-center items-center">
			<p
				className={
					selectedDuration == "monthly" && "text-[#04285A] font-[550]"
				}>
				Monthly
			</p>

			<div className="bg-[#04285A] p-1 rounded-2xl w-[50px]">
				<div className="rounded-full bg-white w-[20px] h-[20px]"></div>
			</div>

			<p>Yearly</p>
		</div>
	);
}

export default PlanDurationToggle;
