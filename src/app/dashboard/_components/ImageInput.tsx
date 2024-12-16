"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { FormValues, ResponsePredict } from "@/types/ImageTrainType";
import PredictPublic from "@/api/Predict/predictPublic";
import PredictTuned from "@/api/Predict/predictTune";
import useUserStore from "@/store/userStore";

interface ImageInputProps {
	setResponseTrainImage: React.Dispatch<
		React.SetStateAction<ResponsePredict | undefined>
	>;
	isLogin?: boolean;
}

const ImageInput: React.FC<ImageInputProps> = ({
	setResponseTrainImage,
	isLogin,
}) => {
	const [preview, setPreview] = useState<string | null>(null); // Preview gambar
	const { control, handleSubmit } = useForm<FormValues>();
	const {
		mutateUsePredictPublic,
		responsePublicPredict,
		isSuccessPublicPredict,
	} = PredictPublic();
	const { mutateUsePredictTuned, responsePredictTuned, isSuccessPredictTuned } =
		PredictTuned();
	// Fungsi onDrop untuk Dropzone
	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			setPreview(URL.createObjectURL(file)); // Buat preview
			console.log(file);
		}
	}, []);

	// Dropzone hooks
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "image/*": [] }, // Hanya file gambar
		multiple: false, // Hanya satu file
	});

	// Submit function
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		if (!data.image) {
			alert("Please select an image!");
			return;
		}

		const formData: any = new FormData();
		formData.append("image", data.image);
		console.log(formData.get("image"));
		// Upload the image using fetch API
		// console.log(formData);
		isLogin
			? await mutateUsePredictTuned(formData)
			: await mutateUsePredictPublic(formData);
	};

	// Effect to update responseTrain when prediction is successful
	useEffect(() => {
		// Cek apakah user tidak memiliki token akses

		if (!isLogin) {
			// Jika public prediction sukses, set response train image
			if (isSuccessPublicPredict && responsePublicPredict) {
				setResponseTrainImage(responsePublicPredict.data);
			}
		} else {
			// Jika tuned prediction sukses, set response train image
			if (isSuccessPredictTuned && responsePredictTuned) {
				setResponseTrainImage(responsePredictTuned.data);
			}
		}
	}, [
		isSuccessPublicPredict,
		responsePublicPredict,
		isSuccessPredictTuned,
		responsePredictTuned,
		setResponseTrainImage,
	]);

	//const change image untuk menghapus preview di button
	const changeImage = () => {
		setPreview(null);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full flex flex-col gap-4"
		>
			<h1 className="text-lg font-semibold text-center">Upload Image</h1>
			{/* Dropzone */}
			<Controller
				name="image"
				control={control}
				render={({ field }) => (
					<div
						{...getRootProps({
							className:
								"flex p-9 flex-col border border-dashed rounded-md border-black w-full gap-4 justify-center items-center drop-area",
						})}
					>
						<input
							{...getInputProps({
								onChange: (e) =>
									field.onChange(e.target.files ? e.target.files[0] : null),
							})}
						/>
						{isDragActive ? (
							<p className="text-gray-500">Drop the files here...</p>
						) : (
							<div className="text-center">
								{preview ? (
									<img
										src={preview}
										alt="Preview"
										className="w-40 h-40 object-cover rounded-md"
									/>
								) : (
									<>
										<div className="flex items-center justify-center gap-2">
											<div className="rounded-full p-1 border border-black">
												<img
													src="images/uploadIcon.svg"
													className="w-8"
													alt="plus"
												/>
											</div>
											<p className="text-black text-lg font-light">
												Drag and drop
											</p>
										</div>
										<h5 className="text-black text-base font-medium">Or</h5>
										<button
											type="button"
											className="text-gray-700 py-2 px-4 rounded-lg border border-gray-400 hover:border-gray-500"
										>
											Upload from computer
										</button>
									</>
								)}
							</div>
						)}
					</div>
				)}
			/>

			{/* Submit Button */}
			<div className="flex w-full justify-center items-center flex-row gap-4">
				<button
					type="submit"
					className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
				>
					Send
				</button>
				<button
					type="button"
					onClick={() => changeImage()}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
				>
					Change Image
				</button>
			</div>
		</form>
	);
};

export default ImageInput;
