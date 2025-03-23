import Addon from "../components/Addon";

function PickAddons({ addons, duration }) {
	return (
		<div className="mt-5">
			<ul className="flex flex-col space-y-3">
				{addons.map((addon) => (
					<li>
						<Addon data={addon} duration={duration} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default PickAddons;
