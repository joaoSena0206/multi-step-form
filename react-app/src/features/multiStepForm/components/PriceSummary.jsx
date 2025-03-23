function PriceSummary({ total, duration }) {
	return (
		<div className="flex items-center justify-between p-5 pb-0">
			<p className="text-[#9D9DA7] font-[500]">
				Total (per {duration == "monthly" ? " month" : "year"})
			</p>

			<p className="text-[#332BB4] font-bold">
				+${total + (duration == "monthly" ? "/mo" : "/yr")}
			</p>
		</div>
	);
}

export default PriceSummary;
