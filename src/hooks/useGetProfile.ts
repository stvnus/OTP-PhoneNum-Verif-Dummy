import { axiosInstance } from "@/config/axios";
import { AxiosResponse } from "axios";
import { useState, useCallback, useEffect } from "react";

type Props = {
    enabled: boolean;
}

//contoh
type ApiResponse<T = any> = {
    data: T;
    message: string;
    responseCode: string;
}

type Profile = any;

export const useGetProfile = (props: Props) => {
    const [data, setData] = useState<AxiosResponse<ApiResponse<Profile>>>();

    const [error, setError] = useState<any>(null)

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFetch = useCallback(
      async () => {
        try {
            setIsLoading(true);
            const res: AxiosResponse<ApiResponse<Profile>> = await axiosInstance({
                method: "GET",
                url: "v1/profile"
            })
            setData(res);
            setIsLoading(false);
            return res;
        } catch (error) {
            setIsLoading(false);
            setError(error);
            throw error;
        }
      },
      [],
    );

    useEffect(() => {
        if (props.enabled) {
            handleFetch();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.enabled])

    return {data, handleFetch, error, isLoading}
}