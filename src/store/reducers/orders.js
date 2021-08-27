import {
  FETCH_ORDERS,
  STATUS_ORDERS,
  MESSAGE_ORDERS,
} from "constants/types/orders";

const initialState = {
  data: {},
  total: 0,
  status: "idle",
  message: "",
};

export default function orders(state = initialState, action) {
  switch (action.type) {
    case STATUS_ORDERS:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_ORDERS:
      return {
        ...state,
        data:
          action.payload?.reduce?.((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {}) ?? {},
        total: action.payload?.length ?? 0,
        status: "ok",
      };

    case MESSAGE_ORDERS:
      return {
        ...state,
        message: action.payload,
        status: "error",
      };

    default:
      return state;
  }
}