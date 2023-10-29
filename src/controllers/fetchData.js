import { registrationUrl } from './api';

export const fetchData = async (formData) => {
  const response = await fetch(registrationUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  return data;
};
