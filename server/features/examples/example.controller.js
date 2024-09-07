import { Controller } from '#lib';
import ExampleResource from './example.resource.js';
import ExampleService from './example.service.js';
import { exampleCreateRules, exampleUpdateRules } from './example.validation.js';

class ExampleController extends Controller {
  service = ExampleService;
  resource = ExampleResource;
  rules = {
    create: exampleCreateRules,
    update: exampleUpdateRules,
  };

  getBySlug = async (req, res) => {
    const { slug } = req.params;
    const data = await this.service.getBySlug(slug);
    if (!data?._id) return this.error({ res, message: 'Data not found!' });

    const resource = this.resource?.make(data) || data;
    this.success({ res, message: 'Data fetched!', resource });
  };
}
export default new ExampleController();
