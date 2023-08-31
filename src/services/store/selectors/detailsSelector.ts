import { RootState } from "../../../utils/types";

export const detailsSelector = (store:RootState) => {
  return store.orderDetails.order;
};
