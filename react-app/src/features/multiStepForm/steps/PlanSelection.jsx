import PlanOption from "../components/PlanOption";
import PlanDurationToggle from "../components/PlanDurationToggle";

function PlanSelection({ plans, selectedPlan, dispatch }) {
	return (
		<div className="mt-5">
			<ul className="flex flex-col space-y-3">
				{plans.map((plan) => (
					<li key={plan.id}>
						<PlanOption
							isSelected={selectedPlan.id == plan.id}
							plan={plan}
							duration={selectedPlan.duration}
							onPlanClick={() =>
								dispatch({
									type: "selected_plan",
									planId: plan.id,
								})
							}
						/>
					</li>
				))}
			</ul>

			<PlanDurationToggle />
		</div>
	);
}

export default PlanSelection;
