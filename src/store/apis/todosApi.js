import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://jsonplaceholder.typicode.com',
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
  }),
})

export const { useGetTodosQuery } = todosApi
