import axios from 'axios';

const imagesApi = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const getImages = async page => {
  const { data } = await imagesApi.get(`/?q=cat`, {
    params: {
      key: '31237471-5a493734838c09426069ada78',
      page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });

  return data;
};
