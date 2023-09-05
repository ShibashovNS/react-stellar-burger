import { RootState } from "../../../../utils/types";

export const userserStatusAuth = (state: { user: { isAuthChecked: boolean; }; }) => state.user.isAuthChecked; 

export const allOrdersInf = (state:RootState) => state.wsData.wsData.data; 
