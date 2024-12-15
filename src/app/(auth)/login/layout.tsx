"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

import { ReactNode } from "react";
import Login from "./page";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div className="h-full flex items-center justify-center">
					<Login />
				</div>
				<ToastContainer position="top-center" />
			</QueryClientProvider>
		</>
	);
}
