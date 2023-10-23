import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3500'}),
    tagTypes:['todos'],
    endpoints:(builder) => ({
        //use for get method
        getTodos: builder.query({
            query:() => '/todos',
            providesTags:['todos']
        }),
        //use for post,put,delete
        addTodo: builder.mutation({
            query:(todo)=>({
                url:'/todos',
                method:'POST',
                body:todo

            }),
            invalidatesTags:['todos']
        }),
        updateTodo: builder.mutation({
                query:(todo)=>({
                    url:`/todos/${todo.id}`,
                    method:'PATCH',
                    body:todo
    
            }),
            invalidatesTags:['todos']
        }),
        deleteTodo: builder.mutation({
            query:({id}) => ({
                url: `/todos/${id}`,
                method:'DELETE',
                body:id
            }),
            invalidatesTags:['todos']
        }),
        })
    })

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = apiSlice