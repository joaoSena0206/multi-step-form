import PlanOption from "../components/PlanOption";

function PlanSelection({ plans, selectedPlan, onPlanClick }) {
	return (
		<div className="mt-5">
			<ul className="flex flex-col space-y-3">
				{plans.map((plan) => (
					<li key={plan.id}>
						<PlanOption
							isSelected={selectedPlan == plan.id}
							plan={plan}
							onPlanClick={() => onPlanClick(plan.id)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default PlanSelection;
