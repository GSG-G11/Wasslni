import * as Yup from 'yup';

const addParcelSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  phoneNumber: Yup.string().min(9, 'الرقم يجب ان يتكون من 9 أرقام').max(9, 'الرقم يجب ان يتكون من 9 أرقام').matches(/^[0-9]*$/, 'الرقم يجب ان يتكون من 9 أرقام')
    .required(' هذه الخانة مطلوبة'),
  price: Yup.string()
    .required('Required'),
  image: Yup.string()
    .required('Required'),
});

export default addParcelSchema;
