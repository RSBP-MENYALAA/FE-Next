
import { useQuery } from "@tanstack/react-query";
import main from "../main";
import { getUser as getUserType } from "@/types/getUser";
import { ResponseUser } from "@/types/getUserResponse";


export default function getUser() {
    const {
        data: getUserData,
        isLoading,
        error, status
    } = useQuery({
        queryKey: ["/users/me"],
        queryFn: () => {
            return main.get<ResponseUser<getUserType>>("/users/me");
        },
        enabled: true,
    });
    console.log(status);
    return { getUserData, isLoading, error };
}
