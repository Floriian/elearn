import { useAppSelector } from "@/app";
import { getUISidebar as _getUISidebar } from "@/features";

export const useUiSidebar = () => useAppSelector(_getUISidebar);
