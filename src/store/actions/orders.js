import {
  FETCH_ORDERS,
  STATUS_ORDERS,
  MESSAGE_ORDERS,
} from "constants/types/orders";

export const statusOrders = (status) => ({
  type: STATUS_ORDERS,
  payload: status,
});

export const fetchOrders = (orders) => ({
  type: FETCH_ORDERS,
  payload: orders,
});

export const messageOrders = (message) => ({
  type: MESSAGE_ORDERS,
  payload: message,
});
