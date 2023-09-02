import { RootState } from "../../../../utils/types";

export const userserStatusAuth = (state: { user: { isAuthChecked: boolean; }; }) => state.user.isAuthChecked; 
export const userserData = (state: { user: { user: string; }; }) => state.user.user;