import { useMutation } from "@tanstack/react-query";
import main from "../main";
import { LoginUser as LoginUserType } from "@/types/LoginUserType";
import { toast } from "react-toastify";
import useUserStore from "@/store/userStore";
import 'react-toastify/dist/ReactToastify.css';


export default function LoginUser() {
	const {
		mutate: mutateUseLoginUser,
		data: response,
		isSuccess,
	} = useMutation({
		mutationFn: (data: LoginUserType) => {
			const loginUser = data;
			return main.post(`auth/login`, loginUser);
		},
		onError: (error: Error) => toast.error(getErrorMessage(error)),
		onSuccess: () => toast.success("Sukses Login"),
	});

	if (response && response.data && response.data.data && response.data.data.accessToken) {
		const { accessToken } = response.data.data;
		useUserStore.getState().setAccessToken(accessToken);
		localStorage.setItem("accessToken", accessToken);
		console.log(useUserStore.getState().accessToken);
	}


	return { mutateUseLoginUser, response, isSuccess };
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

