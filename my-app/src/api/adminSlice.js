import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getCounter: builder.query({
            query: () => `accounts`,
            transformResponse: (response) => response.sort((a, b) => a.id - b.id),
            providesTags: ['accounts']
        }),

        addAccounts: builder.mutation({
            query: (id, amount) => ({

                url: 'accounts',
                method: 'POST',
                body: {
                    id,
                    amount
                },
            }),
            invalidatesTags: ['accounts']
        }),

        deleteAccounts: builder.mutation({
            query: (id) => ({
                url: `accounts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['accounts']
        }),

        updateAccounts: builder.mutation({
            query: ({ id, amount }) => ({
                url: `accounts/${id}`,
                method: 'PATCH',
                body: {
                    amount
                }
            }),
            invalidatesTags: ['accounts']
        }),
    }),


})

export const { useGetCounterQuery,
    useAddAccountsMutation,
    useDeleteAccountsMutation,
    useUpdateAccountsMutation
} = adminApi