import { Schema } from '#lib';

const Example = new Schema({
  name: 'Example',
  schema: [
    {
      name: {
        type: String,
        required: [true, 'Example name is required'],
      },
    },
    { timestamps: true },
  ],
});

Example.statics.fillables = [];
Example.statics.hidden = [];

export default Example.makeModel();
