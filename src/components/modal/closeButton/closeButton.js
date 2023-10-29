import { renderButton } from '../../button/renderButton';

export const closeButton = (modal) => {
  const button = renderButton('close-button');
  button.textContent = 'Close';

  button.addEventListener('click', (e) => {
    e.preventDefault();

    modal.remove();

    document.body.classList.remove('modal-open');
  });

  return button;
};
