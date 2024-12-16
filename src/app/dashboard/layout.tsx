"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();

import { ReactNode } from "react";
import DashboardPage from "./page";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<DashboardPage />
				<ToastContainer position="top-center" />
			</QueryClientProvider>
		</>
	);
}
