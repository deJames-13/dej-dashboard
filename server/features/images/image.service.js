import { Service } from '#lib';
import ImageModel from './image.model.js';

class ImageService extends Service {
  model = ImageModel;
  fieldToSlugify = 'name';

  async getBySlug(slug) {
    this._checkModel();
    return this.model.findOne({ slug });
  }
}

export default new ImageService();
