import { useQuery } from "react-query";
import UserSerivce from "services/user.service";
import IUser from "types/user.type";

export function useUser(userId: number) {
    return useQuery<IUser, Error>(["user", userId], () => UserSerivce.get(userId));
}
