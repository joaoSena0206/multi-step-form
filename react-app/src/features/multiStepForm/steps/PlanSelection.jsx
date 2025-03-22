import PlanOption from "../components/PlanOption";

function PlanSelection({ plans }) {
	return (
		<div className="mt-5">
			<ul className="flex flex-col space-y-3">
				{plans.map((plan) => (
					<li key={plan.id}>
						<PlanOption plan={plan} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default PlanSelection;
