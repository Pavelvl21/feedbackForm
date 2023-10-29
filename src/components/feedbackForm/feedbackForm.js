import IMask from 'imask';
import { renderFormField } from './utils/renderFormField';
import { fields } from './utils/fields';
import { validate, validations } from './utils/validate';
import { formButton } from '../formButton/formButton';
import './feedbackForm.scss';

export const feedbackForm = (processState) => {
  const state = processState;

  const form = document.createElement('form');
  form.classList.add('form');

  const button = formButton(form, fields, state);

  fields.forEach(({
    inputId,
    type,
    placeholder,
    fieldType,
  }) => {
    const formField = renderFormField(inputId, type, placeholder, fieldType);

    formField.addEventListener('input', ({ target }) => {
      validate(target);

      if (type === 'tel') {
        IMask(target, {
          mask: '+{375}(00)000-00-00',
        });
      }

      const formData = new FormData(form);

      state.isValid = fields.every((item) => {
        const value = formData.get(item.inputId);
        return validations[item.inputId](value);
      });

      button.disabled = !state.isValid;
    });

    form.append(formField);
  });

  form.append(button);
  return form;
};
