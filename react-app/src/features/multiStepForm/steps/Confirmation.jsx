function Confirmation() {
	return (
		<div className="flex flex-col text-center items-center mt-20 mb-20">
			<img
				className="w-[60px] mb-5"
				src="src/features/multiStepForm/icons/icon-thank-you.svg"
				alt="Thank You Icon"
			/>
			<h1 className="text-[#0F2749] font-bold text-[30px] mb-3">
				Thank you!
			</h1>

			<p className="text-[#9A9AA2] font-[500] text-[20px]">
				Thanks for confirming your subscription! We hope you have fun
				using our platform. If you ever need support, please feel free
				to email us at support@loremgaming.com.
			</p>
		</div>
	);
}

export default Confirmation;
