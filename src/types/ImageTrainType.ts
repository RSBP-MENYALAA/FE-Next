export interface FormValues {
	image: File | null; // File tunggal
}


export interface ImageRetrainType {
	imagepath: File | null;
	new_class: number;
}

export interface ResponsePredict {
	resultCode: string;
	resultMessage: string;
	data: {
		prediction: {
			confidence: number;
			imagePath: string;
			label: string;
			predicted_class: number;
			probabilities: [
				[
					number,
					number
				]
			];
		}
	};

}


export interface ResponseRetrain {
	resultCode: string;
	resultMessage: string;
	data: {
		imagepath: string;
		new_class: number;
	};
}