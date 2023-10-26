import { api } from "@/app";
import { Class } from "@/features";
import { ApiPaginationResponse } from "@/types";

export const classApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getClasses: builder.query<ApiPaginationResponse<Class[]>, { page: number }>(
      {
        query: ({ page }) => ({ method: "GET", url: `/class/?page=${page}` }),
        providesTags: ["Class"],
      },
    ),
    getClassById: builder.query<Class, { id: number }>({
      query: ({ id }) => ({ method: "GET", url: `/class/${id}` }),
      providesTags: ["Class"],
    }),

    joinClass: builder.mutation<unknown, { inviteCode: string }>({
      query: ({ inviteCode }) => ({
        method: "POST",
        url: `/class/join/${inviteCode}`,
      }),
      invalidatesTags: ["Class"],
    }),
  }),
});

export const {
  useGetClassByIdQuery,
  useGetClassesQuery,
  useJoinClassMutation,
} = classApi;
