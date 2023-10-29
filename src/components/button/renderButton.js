import './button.scss';

export const renderButton = (className) => {
  const button = document.createElement('button');
  button.classList.add('button', className);

  return button;
};
