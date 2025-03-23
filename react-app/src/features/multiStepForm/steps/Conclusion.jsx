import PlanSummary from "../components/PlanSummary";
import AddonsSummary from "../components/AddonsSummary";
import PriceSummary from "../components/PriceSummary";

function Conclusion({ plan, duration, addons, onChangePlan }) {
	return (
		<div className="mt-5">
			<div className="bg-[#F8F9FE] p-5 rounded-lg space-y-3">
				<PlanSummary
					onChangeClick={onChangePlan}
					plan={plan}
					duration={duration}
				/>

				{addons.length > 0 && <hr className="border-[#d7d7de]" />}

				<AddonsSummary addons={addons} duration={duration} />
			</div>

			<PriceSummary
				total={
					plan.price[duration] +
					addons.reduce((total, a) => total + a.price[duration], 0)
				}
				duration={duration}
			/>
		</div>
	);
}

export default Conclusion;
