import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v4 as uuidv4 } from 'uuid';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp'],
    public_id: (req, file) => file.filename + '_' + uuidv4(),
  },
});

export const upload = multer({ storage });

