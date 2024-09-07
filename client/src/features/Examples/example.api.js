import { apiSlice } from '@app/config';

const exampleApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getExamples: build.mutation({
      query: () => ({
        url: '/examples',
        method: 'GET',
      }),
    }),
    getExample: build.mutation({
      query: (slug) => ({
        url: `/examples/slug/${slug}`,
        method: 'GET',
      }),
    }),
    deleteExample: build.mutation({
      query: (id) => ({
        url: `/examples/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    createExample: build.mutation({
      query: (example) => ({
        url: '/examples',
        method: 'POST',
        body: example,
      }),
    }),
    updateExample: build.mutation({
      query: ({ id, example }) => ({
        url: `/examples/edit/${id}`,
        method: 'PATCH',
        body: example,
      }),
    }),
  }),
});

export { exampleApi };
