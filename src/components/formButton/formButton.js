import { renderButton } from '../button/renderButton';
import { fetchData } from '../../controllers/fetchData';
import { renderAlert } from '../alert/renderAlert';

export const formButton = (form, fields, state) => {
  const button = renderButton('form-button');
  button.textContent = 'Send';

  const fieldsNames = fields.map(({ inputId }) => inputId);

  button.addEventListener('click', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const inputData = fieldsNames.reduce((acc, item) => {
      const value = formData.get(item);
      return { ...acc, [item]: value };
    }, {});

    const responseData = await fetchData(inputData);
    renderAlert(responseData);

    if (responseData.status) {
      form.reset();
      button.disabled = true;
      const inputs = form.querySelectorAll('[class*="form-"]');
      inputs.forEach((element) => {
        element.classList.remove('valid');
      });
    }
  });

  const { isValid } = state;
  button.disabled = !isValid;

  return button;
};
