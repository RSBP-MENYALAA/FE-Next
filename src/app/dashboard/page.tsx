"use client";
import { useEffect, useState } from "react";
import Header from "./_components/Header";
import ImageInput from "./_components/ImageInput";
import { ResponsePredict } from "@/types/ImageTrainType";
import useUserStore from "@/store/userStore";

export default function DashboardPage() {
	const [responseTrain, setResponseTrain] = useState<ResponsePredict>();
	const [isLogin, setIsLogin] = useState(false);

	// Cek login status dalam useEffect untuk menghindari re-render yang tidak diinginkan
	useEffect(() => {
		const accessToken =
			useUserStore.getState().accessToken ||
			localStorage.getItem("accessToken");

		// Update state hanya jika akses token ditemukan
		setIsLogin(!!accessToken); // Menggunakan !! untuk memastikan nilai boolean (true/false)
	}, []); //

	return (
		<>
			<Header />
			<main className="w-full h-screen flex justify-center pt-36">
				<div className="flex flex-col gap-3 w-1/2">
					<h2 className="text-lg font-bold">Choose your prediction :</h2>
					<div className="flex flex-col gap-2 w-full">
						<div className="flex flex-row justify-between w-full">
							<p>{!isLogin ? "Basic" : "Advanced"}</p>
							<p className="text-black/50">
								{!isLogin
									? "*for tuned prediction please login"
									: "*for more accurate prediction"}
							</p>
						</div>

						<div className="flex items-start w-full flex-col gap-4">
							<ImageInput
								setResponseTrainImage={setResponseTrain}
								isLogin={isLogin}
							/>
						</div>
					</div>
					<div className="w-full flex flex-col gap-4 justify-center items-center mt-5">
						{responseTrain ? (
							<>
								<h1 className="text-lg font-bold">Prediction Result</h1>
								<div className="flex flex-col gap-2">
									<p>Confidence : {responseTrain.data.prediction.confidence}</p>
									<p>Label : {responseTrain.data.prediction.label}</p>
									<p>
										Predicted Class :{" "}
										{responseTrain.data.prediction.predicted_class == 0
											? "Human ('0')"
											: "AI ('1')"}
									</p>
									<p>
										Probabilities :{" "}
										{responseTrain.data.prediction.probabilities}
									</p>
									<p>Image Path : {responseTrain.data.prediction.imagePath}</p>
								</div>
							</>
						) : (
							<p>Upload and send the image to see the result</p>
						)}
					</div>
					<div className="flex flex-row gap-4 justify-center items-center w-full h-16 bg-white shadow-xl pt-10">
						<p className="text-black text-sm">© 2021 Human VS AI</p>
						<p>||</p>
						<p>created for knowledge based engineering project </p>
					</div>
				</div>
			</main>
		</>
	);
}
