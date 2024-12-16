import { useMutation } from "@tanstack/react-query";
import main from "../main";
import { toast } from "react-toastify";
import { FormValues } from "@/types/ImageTrainType";


export default function PredictTuned() {
    const {
        mutate: mutateUsePredictTuned,
        data: responsePublicPredict,
        isSuccess: isSuccessPublicPredict,
    } = useMutation({
        mutationFn: (data: FormValues) => {
            const PredictTuned = data;
            return main.post(`predict-tuned`, PredictTuned);
        },
        onError: (error: Error) => toast.error(getErrorMessage(error)),
        onSuccess: () => toast.success("Sukses Predict Tuned Model"),
    });
    return { mutateUsePredictTuned, responsePublicPredict, isSuccessPublicPredict };
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

