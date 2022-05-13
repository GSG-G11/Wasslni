// get base64 image  from file and check extension and size
const getBase64Image = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
    reject(new Error('الرجاء اختيار صورة'));
  }

  // file size should be less than 1mb
  if (file.size > 1000000) {
    reject(new Error('الرجاء اختيار صورة أقل من 1 ميجا'));
  }
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

export default getBase64Image;
