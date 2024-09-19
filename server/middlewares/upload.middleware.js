import { cloudinary } from '#common';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v4 as uuidv4 } from 'uuid';

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const tags = [req?.headers?.resource, req?.body?.id, req?.params?.id];
    const folders = req?.headers?.resource || 'uploads';
    const sanitizedFilename = file?.originalname.replace(/[^a-zA-Z0-9]/g, '_');
    const public_id = `${sanitizedFilename}_${uuidv4()}`;

    return {
      folders,
      public_id,
      tags: tags.length > 0 ? tags : 'n/a',
      allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp'],
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

