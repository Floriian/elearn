import { api } from "@/app";
import { Course } from "@/features";
import { ApiPaginationResponse } from "@/types";

interface CourseOptions {
  page?: number;
  courseId?: number;
}

export const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<ApiPaginationResponse<Course[]>, CourseOptions>({
      query: ({ page }) => {
        return {
          method: "GET",
          url: `/courses?page=${page}`,
        };
      },
      providesTags: ["Courses"],
    }),
    getCourse: builder.query<Course, CourseOptions>({
      query: ({ courseId }) => ({ method: "GET", url: `/courses/${courseId}` }),
      providesTags: ["Courses"],
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseQuery } = courseApi;
