import { Schema } from '#lib';

const Image = new Schema({
  name: 'Image',
  schema: [
    {
      name: {
        type: String,
        unique: [true, 'Image name must be unique'],
        required: [true, 'Image name is required'],
      },
      slug: {
        type: String,
      },
      public_id: {
        type: String,
      },
      folder: {
        type: String,
      },
      filename: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    { timestamps: true },
  ],
});

Image.statics.fillables = [];
Image.statics.hidden = [];

export default Image.makeModel();
