import { api } from "@/app";
import { Course } from "@/features";

export const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], void>({
      query: () => ({ method: "GET", url: "/courses" }),
      providesTags: ["Courses"],
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
