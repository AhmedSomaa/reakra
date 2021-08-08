import { useQuery } from "react-query";
import UserSerivce from "services/user.service";
import IUser from "types/user.type";

export function useUsers() {
    return useQuery<IUser[], Error>("users", UserSerivce.getAll);
}
