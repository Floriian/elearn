import { api } from "@/app";
import { Course } from "@/features";
import { ApiPaginationResponse } from "@/types";

interface CourseOptions {
  page: number;
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
  }),
});

export const { useGetCoursesQuery } = courseApi;
