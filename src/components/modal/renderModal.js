import './modal.scss';
import { closeButton } from './closeButton/closeButton';

export const renderModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('hidden');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const description = document.createElement('p');
  description.classList.add('modal-description');
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const button = closeButton(modal);
  modalContent.append(description, button);

  modal.append(modalContent);

  setTimeout(() => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
  }, 1);

  return modal;
};
