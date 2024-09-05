import { apiSlice } from '@app/config';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.mutation({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
  }),
});
