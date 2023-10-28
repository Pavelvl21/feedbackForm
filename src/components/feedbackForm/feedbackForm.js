import { renderFormField, fields } from './utils';
import './feedbackForm.scss';

export const feedbackForm = () => {
  const form = document.createElement('form');
  form.classList.add('form');

  fields.forEach(({
    id,
    type,
    placeholder,
    fieldType,
  }) => {
    const formField = renderFormField(id, type, placeholder, fieldType);
    form.append(formField);
  });

  return form;
};
