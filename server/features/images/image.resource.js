import { Resource } from '#lib';
export default class ImageResource extends Resource {
  transform(image) {
    const { _id, ...rest } = image;
    return {
      id: _id,
      ...rest,
    };
  }
}
