const mapping = {
  name: 'Minimum 2 characters',
  email: 'Enter a correct e-mail',
  phone: 'Minumun 9 digits',
  feedback: 'Minimun 15 characters',
};

export const renderFormField = (inputId, type, placeholder, fieldType) => {
  const field = document.createElement('div');
  field.classList.add('form-field');

  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = placeholder;
  label.classList.add('form-label');

  const input = document.createElement(fieldType);
  input.setAttribute('type', type);
  input.setAttribute('id', inputId);
  input.setAttribute('name', inputId);
  input.setAttribute('placeholder', '');
  input.setAttribute('autocomplete', 'off');
  input.classList.add(`form-${fieldType}`);

  const alertMessage = document.createElement('p');
  alertMessage.classList.add('field-message');
  alertMessage.textContent = mapping[inputId];

  field.append(input, label, alertMessage);

  return field;
};
