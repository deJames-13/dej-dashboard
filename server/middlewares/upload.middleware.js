import { cloudinary } from '#common';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v4 as uuidv4 } from 'uuid';

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const tags = [req?.headers?.resource, req?.body?.id, req?.params?.id];
    const folders = req?.headers?.resource || 'uploads';
    return {
      folders,
      tags: tags.length > 0 ? tags : 'n/a',
      allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp'],
      public_id: (req, file) => file.originalname + '_' + uuidv4(),
    };
  },
});

const deleteFile = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};

const deleteFileOnError = async (req, res, next) => {
  try {
    await next();
  } catch (error) {
    await deleteFile(req.file.public_id);
    throw error;
  }
};

export const upload = multer({ storage });

export { deleteFile, deleteFileOnError };

