import * as dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();

const cloudinaryImg = (img: string) => new Promise((resolve, reject) => {
  cloudinary.v2.uploader.upload(img, (error, url) => {
    if (error) {
      reject(Error('cloudinary error'));
    } else {
      resolve(url);
    }
  });
});

export default cloudinaryImg;
