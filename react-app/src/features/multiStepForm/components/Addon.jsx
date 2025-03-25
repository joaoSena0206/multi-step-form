function Addon({ data, duration, isSelected, onClick }) {
	return (
		<div
			className={`flex space-x-5 items-center border-[1px] p-3 px-4  rounded-lg ${
				isSelected
					? "border-[#544C99] bg-[#F8F9FE]"
					: "border-[#DBDBDD]"
			}`}>
			<div
				className={`w-[25px] h-[25px] border-[1px] rounded-md shrink-0 flex items-center justify-center ${
					isSelected ? "bg-[#4B41FF] border-none" : "border-[#DBDBDD]"
				}`}
				onClick={onClick}>
				{isSelected && (
					<img
						className="w-[15px]"
						src="src/features/multiStepForm/icons/icon-checkmark.svg"
					/>
				)}
			</div>

			<div className="flex-1 min-w-0">
				<h2 className="text-[#002C5D] font-[550]">{data.name}</h2>
				<p className="text-[#a6a6ae] font-[550] text-[14px]">
					{data.description}
				</p>
			</div>

			<div className="flex justify-end min-w-[60px] text-right">
				<p className="text-[#544C99] shrink-0">
					+$
					{data.price[duration] +
						(duration == "monthly" ? "/mo" : "/yr")}
				</p>
			</div>
		</div>
	);
}

export default Addon;
