import { useMutation } from "@tanstack/react-query";
import main from "../main";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function PredictTuned() {
    const {
        mutate: mutateUsePredictTuned,
        data: responsePredictTuned,
        isSuccess: isSuccessPredictTuned,
    } = useMutation({
        mutationFn: (data: any) => {
            return main.post(`predict-tuned`, data);
        },
        onError: (error: Error) => toast.error(getErrorMessage(error)),
        onSuccess: () => toast.success("Sukses Predict Tuned Model"),
    });
    return { mutateUsePredictTuned, responsePredictTuned, isSuccessPredictTuned };
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

