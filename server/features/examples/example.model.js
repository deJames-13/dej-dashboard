import { Schema } from '#lib';

const Example = new Schema({
  name: 'Example',
  schema: [
    {
      name: {
        type: String,
        unique: [true, 'Example name must be unique'],
        required: [true, 'Example name is required'],
      },
      slug: {
        type: String,
      },
    },
    { timestamps: true },
  ],
});

Example.statics.fillables = [];
Example.statics.hidden = [];

export default Example.makeModel();
