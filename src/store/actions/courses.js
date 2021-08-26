import {
  FETCH_COURSES,
  WATCH_COURSES,
  STATUS_COURSES,
  MESSAGE_COURSES,
} from "constants/types/courses";

export const statusCourses = (status) => ({
  type: STATUS_COURSES,
  payload: status,
});

export const fetchCourses = (courses) => ({
  type: FETCH_COURSES,
  payload: courses,
});

export const watchCourses = (courses) => ({
  type: WATCH_COURSES,
  payload: courses,
});

export const messageCourses = (message) => ({
  type: MESSAGE_COURSES,
  payload: message,
});
