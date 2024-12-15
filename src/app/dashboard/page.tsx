import React from "react";

export default function Page() {
	return (
		<>
			<header className="flex justify-between fixed w-full p-4 px-6 bg-white shadow-xl items-center">
				<h1 className="text-lg font-['Montserrat']">HUMAN VS AI</h1>
				<button className="px-4 py-2 text-sm text-black hover:text-white bg-transparent hover:bg-[#FD6565] rounded-md">
					Login
				</button>
			</header>
			<main className="w-full h-screen flex justify-center items-center">
				<div className="flex flex-col gap-3 w-1/2">
					<h2 className="text-lg font-bold">Choose your prediction :</h2>
					<div className="flex flex-col gap-2 w-full">
						<div className="flex flex-row justify-between w-full">
							<p>Basic</p>
							<p className="text-black/50">
								*for tuned prediction please login
							</p>
						</div>
						<div className="flex items-start w-full flex-col gap-4">
							<form method="POST" className="w-full flex gap-4 flex-col">
								<div
									className="flex p-9 flex-col border border-dashed rounded-md border-black w-full gap-4 justify-center items-center drop-area"
									id="drop-area"
								>
									<img
										alt="upload"
										className="hidden imagepreview"
										id="imagepreview"
									/>
									<div className="w-full flex flex-col justify-center items-center gap-4 calonhidden">
										<div className="flex flex-row gap-2 justify-center items-center">
											<div className="rounded-full p-1 border border-black">
												{/* //import svg from public/images/plus.svg */}
												<img
													src="images/uploadIcon.svg"
													className="w-[30px]"
													alt="plus"
												/>
											</div>
											<p className="text-black text-lg text-center font-light">
												Drag and drop
											</p>
										</div>

										<h5 className="text-black text-base text-center font-medium">
											Or
										</h5>
										<input
											id="image-input"
											name="image"
											accept="image/*"
											style={{ display: "none" }}
											className="bg-[#69696944]"
										/>
										<button
											id="button-upload"
											className=" text-[#808080] py-3 px-5 flex justify-center items-center rounded-xl border-[#545977] border-2 w-[40%] hover:border-[#a0a7cc] hover:text-white"
										>
											Upload from computer
										</button>
									</div>
								</div>
								<div className="flex w-full justify-center items-center">
									<button className="flex text-white justify-center items-center px-3 py-1 rounded-xl bg-[#FD6565] border border-[#212122] w-[50%] hover:bg-[#ffe9e9]">
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
			<footer className="flex flex-row gap-4 fixed bottom-0 z-10 justify-center items-center w-full h-16 bg-white shadow-xl">
				<p className="text-black text-sm">© 2021 Human VS AI</p>
				<p>||</p>
				<p>created for knowladge based engineering project </p>
			</footer>
		</>
	);
}
