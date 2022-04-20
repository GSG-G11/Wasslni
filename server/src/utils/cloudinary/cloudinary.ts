import * as dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();

const cloudinaryImg = (img: string) => cloudinary.v2.uploader
  .upload(img, {
    resource_type: 'image',
  })
  .then((result) => result.secure_url)
  .catch((error) => error);

export default cloudinaryImg;
