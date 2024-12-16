import { useMutation } from "@tanstack/react-query";
import main from "../main";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function PredictPublic() {
    const {
        mutate: mutateUsePredictPublic,
        data: responsePublicPredict,
        isSuccess: isSuccessPublicPredict,
    } = useMutation({
        mutationFn: (data: any) => {
            return main.post(`predict`, data);
        },
        onError: (error: Error) => toast.error(getErrorMessage(error)),
        onSuccess: () => toast.success("Sukses Predict Public Model"),
    });

    return { mutateUsePredictPublic, responsePublicPredict, isSuccessPublicPredict };
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

