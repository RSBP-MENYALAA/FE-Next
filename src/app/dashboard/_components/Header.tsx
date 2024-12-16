"use client";

import getUser from "@/api/User/getUser";
import useUserStore from "@/store/userStore";
import { ChevronUp, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const handleLogin = () => {
		window.location.href = "/login";
	};

	const handleRegister = () => {
		window.location.href = "/register";
	};

	const [isRotate, setIsRotate] = useState(false);
	const { getUserData } = getUser();
	const handleRotate = () => {
		setIsRotate(!isRotate);
	};

	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		useUserStore.getState().setAccessToken("");
		window.location.href = "/";
	};

	//cek di zustand atau localstorage jika accesstoken ada maka get me
	//jika tidak ada redirect ke login

	// console.log(getUserData);

	return (
		<header className="flex justify-between fixed w-full p-4 px-6 bg-white shadow-xl items-center">
			<h1 className="text-lg font-['Montserrat']">HUMAN VS AI</h1>
			{!getUserData ? (
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
			) : (
				<>
					<div className="ml-auto flex items-center gap-x-2 pe-4">
						<User
							className="bg-sky-900 p-2 rounded-full"
							color="white"
							size={50}
						/>
						<ChevronUp
							size={30}
							strokeWidth={4}
							onClick={handleRotate}
							style={{
								transform: isRotate ? "rotate(180deg)" : "rotate(0deg)",
							}}
							className="transition-all duration-200"
						/>
					</div>
					<div
						className={`sidebar-right inline-flex flex-col items-center gap-5 justify-center absolute bg-white z-20 top-20 right-0 w-80 h-64 overflow-hidden shadow-md ${
							isRotate ? "" : "hidden"
						}`}
						id="sidebars"
					>
						<User
							className="bg-sky-900 p-2 rounded-full"
							color="white"
							size={80}
						/>
						<div>
							<div className="header-sidebar-kanan text-center">
								<h2 className="text-xl ">
									{getUserData ? getUserData.data.data.name : "Loading..."}
								</h2>
								<p className="text-sm">
									{getUserData ? getUserData.data.data.email : "Loading..."}
								</p>
							</div>
							<div className="menu-sidebar-kanan">
								<Link href="/sign-in">
									<div
										className="printilan-sidebar-kanan flex items-center justify-center cursor-pointer hover:bg-blue-200 rounded-md p-2 mt-2"
										onClick={handleLogout}
									>
										<LogOut className="mr-2 w-10" />
										<span className="font-medium">Logout</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</header>
	);
}
