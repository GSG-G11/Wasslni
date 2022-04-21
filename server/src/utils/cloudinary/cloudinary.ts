import * as dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryImg = (img: string) => new Promise((resolve, reject) => {
  cloudinary.v2.uploader.upload(img, (error, url) => {
    if (error) {
      reject(Error('cloudinary error'));
    } else {
      resolve(url.secure_url);
    }
  });
});

export default cloudinaryImg;
