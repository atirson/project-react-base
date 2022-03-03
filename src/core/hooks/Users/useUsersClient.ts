import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api } from "@app/core/services/api";
import { User } from "@app/core/types/Users";



type GetUsersResponse = {
  users: User[];
}

export async function getUsers(): Promise<GetUsersResponse> {
    return await api.get('/users').then((res: AxiosResponse) => {
        return res.data;
    }).catch((err: Error) => {
        console.log(err);
    });

}


export function useUsers() {
  return useQuery(['users'], () => getUsers(), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}