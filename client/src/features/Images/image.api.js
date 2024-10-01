import { apiSlice } from '@app/config';

const resource = 'images';
const apiUrl = `/${resource}`;
export const dashUrl = `/dashboard/${resource}`;
const tags = [resource];
const headers = {
  resource,
  tags,
};

const imageApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getImages: build.mutation({
      query: () => ({
        url: apiUrl,
        method: 'GET',
        headers,
      }),
    }),
    getImage: build.mutation({
      query: (slug) => ({
        url: `${apiUrl}/slug/${slug}`,
        method: 'GET',
        headers,
      }),
    }),
    deleteImage: build.mutation({
      query: (id) => ({
        url: `${apiUrl}/delete/${id}`,
        method: 'DELETE',
        headers,
      }),
    }),
    createImage: build.mutation({
      query: (image) => ({
        url: apiUrl,
        method: 'POST',
        body: image,
        headers,
      }),
    }),
    updateImage: build.mutation({
      query: ({ id, image }) => ({
        url: `${apiUrl}/edit/${id}`,
        method: 'PATCH',
        body: image,
        headers,
      }),
    }),
  }),
});

export { imageApi };
