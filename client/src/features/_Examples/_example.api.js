import { apiSlice } from '@app/config';

const _exampleApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    get_Examples: build.mutation({
      query: () => ({
        url: '/_examples',
        method: 'GET',
      }),
    }),
    get_Example: build.mutation({
      query: (slug) => ({
        url: `/_examples/slug/${slug}`,
        method: 'GET',
      }),
    }),
    delete_Example: build.mutation({
      query: (id) => ({
        url: `/_examples/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    create_Example: build.mutation({
      query: (_example) => ({
        url: '/_examples',
        method: 'POST',
        body: _example,
      }),
    }),
    update_Example: build.mutation({
      query: ({ id, _example }) => ({
        url: `/_examples/edit/${id}`,
        method: 'PATCH',
        body: _example,
      }),
    }),
  }),
});

export { _exampleApi };

