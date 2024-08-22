import { apiSlice } from '@app/config';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    userQuery: build.mutation({
      //   query: (body) => ({
      //     url: 'path/to/query',
      //     method: 'POST',
      //     body,
      //   }),
    }),
  }),
});
