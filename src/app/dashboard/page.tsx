"use client";
import { useState } from "react";
import Header from "./_components/Header";
import ImageInput from "./_components/ImageInput";
import { ResponsePredict } from "@/types/ImageTrainType";

export default function DashboardPage() {
	const [responseTrain, setResponseTrain] = useState<ResponsePredict>();
	return (
		<>
			<Header />
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
							<ImageInput setResponseTrainImage={setResponseTrain} />
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
				</div>
			</main>
			<footer className="flex flex-row gap-4 fixed bottom-0 z-10 justify-center items-center w-full h-16 bg-white shadow-xl">
				<p className="text-black text-sm">© 2021 Human VS AI</p>
				<p>||</p>
				<p>created for knowledge based engineering project </p>
			</footer>
		</>
	);
}
