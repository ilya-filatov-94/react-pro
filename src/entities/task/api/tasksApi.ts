import { baseApi } from 'shared/api/baseApi';
import type { Task } from 'entities/task/model/types';

export const tasksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'todos',
      transformResponse: (response: Task[]) => response,
      providesTags: ['Tasks'],
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
