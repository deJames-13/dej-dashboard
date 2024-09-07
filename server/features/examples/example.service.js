import { Service } from '#lib';
import ExampleModel from './example.model.js';

class ExampleService extends Service {
  model = ExampleModel;
  fieldToSlugify = 'name';

  async getBySlug(slug) {
    this._checkModel();
    return this.model.findOne({ slug });
  }
}

export default new ExampleService();
