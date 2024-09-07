import { apiSlice } from '@app/config';

const postApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.mutation({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),
    getPost: build.mutation({
      query: (slug) => ({
        url: `/posts/slug/${slug}`,
        method: 'GET',
      }),
    }),
    deletePost: build.mutation({
      query: (id) => ({
        url: `/posts/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    createPost: build.mutation({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
    }),
    updatePost: build.mutation({
      query: ({ id, post }) => ({
        url: `/posts/edit/${id}`,
        method: 'PATCH',
        body: post,
      }),
    }),
  }),
});

export { postApi };

