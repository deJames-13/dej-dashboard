import { Service } from '#lib';
import ExampleModel from './example.model.js';

class ExampleService extends Service {
  model = ExampleModel;
}

export default new ExampleService();
