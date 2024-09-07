import { Resource } from '#lib';
export default class ExampleResource extends Resource {
  transform(example) {
    const { _id, ...rest } = example;
    return {
      id: _id,
      ...rest,
    };
  }
}
