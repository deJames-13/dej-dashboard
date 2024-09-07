import { apiSlice } from '@app/config';

export const exampleApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    exampleQuery: build.mutation({
      //   query: (body) => ({
      //     url: 'path/to/query',
      //     method: 'POST',
      //     body,
      //   }),
    }),
  }),
});
