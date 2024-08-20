import { apiSlice } from '@app/config';

export const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    productQuery: build.mutation({
      //   query: (body) => ({
      //     url: 'path/to/query',
      //     method: 'POST',
      //     body,
      //   }),
    }),
  }),
});
