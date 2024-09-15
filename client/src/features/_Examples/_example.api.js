import { apiSlice } from '@app/config';

const apiUrl = '/_examples';

const _exampleApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    get_Examples: build.mutation({
      query: () => ({
        url: apiUrl,
        method: 'GET',
      }),
    }),
    get_Example: build.mutation({
      query: (slug) => ({
        url: `${apiUrl}/slug/${slug}`,
        method: 'GET',
      }),
    }),
    delete_Example: build.mutation({
      query: (id) => ({
        url: `${apiUrl}/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    create_Example: build.mutation({
      query: (_example) => ({
        url: apiUrl,
        method: 'POST',
        body: _example,
      }),
    }),
    update_Example: build.mutation({
      query: ({ id, _example }) => ({
        url: `${apiUrl}/edit/${id}`,
        method: 'PATCH',
        body: _example,
      }),
    }),
  }),
});

export { _exampleApi };
