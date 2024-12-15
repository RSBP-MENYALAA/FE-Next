"use client";

import { useRouter } from "next/navigation";

export default function Header() {
	const router = useRouter();
	const handleLogin = () => {
		router.push("/login");
	};

	return (
		<header className="flex justify-between fixed w-full p-4 px-6 bg-white shadow-xl items-center">
			<h1 className="text-lg font-['Montserrat']">HUMAN VS AI</h1>
			<button
				onClick={() => handleLogin()}
				className="px-4 py-2 text-sm text-black hover:text-white bg-transparent hover:bg-[#FD6565] rounded-md"
			>
				Login
			</button>
		</header>
	);
}
