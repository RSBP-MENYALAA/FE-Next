import { useMutation } from "@tanstack/react-query";
import main from "../main";
import { toast } from "react-toastify";
import { ImageRetrainType } from "@/types/ImageTrainType";


export default function RetrainImage() {
    const {
        mutate: mutateUseRetrainImage,
        data: responseRetrainImage,
        isSuccess: isSuccessRetrainImage,
    } = useMutation({
        mutationFn: (data: ImageRetrainType) => {
            const RetrainImage = data;
            return main.post(`predict-tuned`, RetrainImage);
        },
        onError: (error: Error) => toast.error(getErrorMessage(error)),
        onSuccess: () => toast.success("Sukses Predict Tuned Model"),
    });
    return { mutateUseRetrainImage, responseRetrainImage, isSuccessRetrainImage };
}


function getErrorMessage(error: any) {
    let resultMessage = "";
    if (error) {
        console.log(error.request);
        const responseJson = JSON.parse(error.request.response);
        console.log(responseJson.resultMessage.en);

        resultMessage = responseJson.resultMessage.en.toString();
    }
    return resultMessage;
}

