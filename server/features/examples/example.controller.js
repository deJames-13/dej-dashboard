import { Controller } from '#lib';
import ExampleResource from './example.resource.js';
import ExampleService from './example.service.js';
import {
    exampleCreateRules,
    exampleUpdateRules,
} from './example.validation.js';

class ExampleController extends Controller {
  service = ExampleService;
  resource = ExampleResource;
  rules = {
    create: exampleCreateRules,
    update: exampleUpdateRules,
  };
}
export default new ExampleController();
