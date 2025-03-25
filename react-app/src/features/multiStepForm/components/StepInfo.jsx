function StepInfo({ title, description }) {
	return (
		<>
			<h1 className="text-[#002C5D] font-bold text-[27px] mb-2 lg:text-[30px]">
				{title}
			</h1>
			<h2 className="text-[#9fa0a3]">{description}</h2>
		</>
	);
}	

export default StepInfo;
