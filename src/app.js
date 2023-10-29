import { feedbackForm } from './components/feedbackForm/feedbackForm';

export const app = () => {
  const main = document.createElement('main');

  const state = {
    isValid: false,
  };

  const form = feedbackForm(state);
  main.append(form);

  document.body.append(main);
};
