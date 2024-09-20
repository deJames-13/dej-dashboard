import { Controller } from '#lib';
import ImageResource from './image.resource.js';
import ImageService from './image.service.js';
import { imageCreateRules, imageUpdateRules } from './image.validation.js';

class ImageController extends Controller {
  service = ImageService;
  resource = ImageResource;
  rules = {
    create: imageCreateRules,
    update: imageUpdateRules,
  };

  store = async (req, res) => {
    const validData = await this.validator(req, res, this.rules.create);
    const data = await this.service?.create(validData);
    if (!data._id) return this.error({ res, message: 'Invalid data!' });
    const resource = this.resource?.make(data) || data;
    this.success({ res, message: 'Data created!', resource });
  };
  update = async (req, res) => {
    const validData = await this.validator(req, res, this.rules.update);
    let data = await this.service?.update(req.params.id, validData);
    if (!data._id) return this.error({ res, message: 'Invalid data!' });
    const resource = this.resource?.make(data) || data;
    this.success({ res, message: 'Data updated!', resource });
  };

  getBySlug = async (req, res) => {
    const { slug } = req.params;
    const data = await this.service.getBySlug(slug);
    if (!data?._id) return this.error({ res, message: 'Data not found!' });

    const resource = this.resource?.make(data) || data;
    this.success({ res, message: 'Data fetched!', resource });
  };
}
export default new ImageController();
