"use client";

export default function Header() {
	const handleLogin = () => {
		window.location.href = "/login";
	};

	const handleRegister = () => {
		window.location.href = "/register";
	};
	return (
		<header className="flex justify-between fixed w-full p-4 px-6 bg-white shadow-xl items-center">
			<h1 className="text-lg font-['Montserrat']">HUMAN VS AI</h1>
			<div className="flex flex-row gap-6">
				<button
					onClick={() => handleLogin()}
					className="px-4 py-2 text-sm text-black hover:text-white bg-transparent hover:bg-[#FD6565] rounded-md"
				>
					Login
				</button>
				<button
					onClick={() => handleRegister()}
					className="px-4 py-2 text-sm text-black hover:text-white bg-transparent hover:bg-[#FD6565] rounded-md"
				>
					Register
				</button>
			</div>
		</header>
	);
}
