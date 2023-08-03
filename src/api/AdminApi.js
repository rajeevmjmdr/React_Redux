import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AdminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `accounts`,
      providesTags: ["accounts"],
    }),
    addAccount: builder.mutation({
      query: ({id,amount}) => ({
        url: `accounts`,
        method: "POST",
        body: {id,amount},
      }),
      invalidatesTags: ["accounts"],
    }),
    deleteAccount: builder.mutation({
      query: (userId) => ({
        url: `accounts/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["accounts"],
    }),
    updateAccount: builder.mutation({
      query: ({id,amount}) => ({
        url: `accounts/${id}`,
        method: "PATCH",
        body: {amount},
      }),
      invalidatesTags: ["accounts"],
    }),
  }),
});
export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = AdminApi;
