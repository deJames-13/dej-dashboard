import { Service } from '#lib';
import slugify from 'slugify';
import ExampleModel from './example.model.js';

class ExampleService extends Service {
  model = ExampleModel;

  async create(body) {
    this._checkModel();
    const data = this.model.filterFillables(body);
    const slug = slugify(data.name, { lower: true, strict: true });
    return this.model.create({ ...data, slug });
  }
  async getBySlug(slug) {
    this._checkModel();
    return this.model.findOne({ slug });
  }
}

export default new ExampleService();
