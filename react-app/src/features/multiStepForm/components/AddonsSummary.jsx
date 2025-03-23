function AddonsSummary({ addons, duration }) {
	return (
		<div>
			<ul>
				{addons.map((addon) => (
					<li
						className="flex items-center justify-between"
						key={addon.id}>
						<p className="text-[#9D9DA7] font-[500]">{addon.name}</p>

						<p className="text-[#002C5D]">
							+$
							{addon.price[duration] +
								(duration == "monthly" ? "/mo" : "/yr")}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default AddonsSummary;
