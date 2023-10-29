import { renderButton } from '../button/renderButton';
import { renderModal } from '../modal/renderModal';

export const modalButton = () => {
  const button = renderButton('modal-button');
  button.textContent = 'Modal';

  button.addEventListener('click', (e) => {
    const { body } = document;
    e.preventDefault();
    const modal = renderModal();
    body.prepend(modal);

    body.classList.add('modal-open');
  });

  return button;
};
