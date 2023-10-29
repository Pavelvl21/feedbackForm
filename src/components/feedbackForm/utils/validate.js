export const validations = {
  name: (value) => value.length >= 2,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  phone: (value) => value.length === 17,
  feedback: (value) => value.length >= 15,
};

export const validate = (target) => {
  const { id, value } = target;

  const isValid = validations[id](value);

  target.classList.toggle('valid', isValid);
  target.classList.toggle('invalid', !isValid);
};
