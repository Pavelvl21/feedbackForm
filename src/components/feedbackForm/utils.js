export const renderFormField = (id, type, placeholder, fieldType) => {
  const field = document.createElement('div');
  field.classList.add('form-field');

  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = placeholder;
  label.classList.add('form-label');

  const input = document.createElement(fieldType);
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('name', id);
  input.setAttribute('placeholder', '');
  input.setAttribute('autocomplete', 'off');
  input.classList.add(`form-${fieldType}`);

  field.append(input, label);

  return field;
};

export const fields = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Name',
    fieldType: 'input',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'E-mail',
    fieldType: 'input',
  },
  {
    id: 'phone',
    type: 'tel',
    placeholder: 'Phone number',
    fieldType: 'input',
  },
  {
    id: 'feedback',
    type: 'text',
    placeholder: 'Message',
    fieldType: 'textarea',
  },
];
