import { useAppSelector } from "@/app";
import { getUser } from "@/features";

export const useUser = () => useAppSelector(getUser);
