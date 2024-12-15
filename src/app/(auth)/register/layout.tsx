"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

import { ReactNode } from "react";
import Register from "./page";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div className="h-full flex items-center justify-center">
					<Register />
				</div>
				<ToastContainer position="top-center" />
			</QueryClientProvider>
		</>
	);
}
