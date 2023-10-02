import { useAppSelector } from "@/app";
import { getUser, getUserAccessToken } from "@/features";

export const useUser = () => useAppSelector(getUser);
export const useToken = () => useAppSelector(getUserAccessToken);
