import Addon from "../components/Addon";

function PickAddons({ addons, duration, dispatch, selectedAddons }) {
	function handleAddonClick(addonId) {
		if (selectedAddons.includes(addonId)) {
			dispatch({ type: "removed_addon", id: addonId });
			return;
		}

		dispatch({ type: "added_addon", id: addonId });
	}

	return (
		<div className="mt-5">
			<ul className="flex flex-col space-y-3">
				{addons.map((addon) => (
					<li key={addon.id}>
						<Addon
							data={addon}
							duration={duration}
							isSelected={selectedAddons.includes(addon.id)}
							onClick={() => handleAddonClick(addon.id)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default PickAddons;
