import { feedbackForm } from './components/feedbackForm/feedbackForm';
import { modalButton } from './components/modalButton/modalButton';

export const app = () => {
  const main = document.createElement('main');

  const state = {
    isValid: false,
  };

  const form = feedbackForm(state);
  const button = modalButton();

  main.append(form, button);

  document.body.append(main);
};
