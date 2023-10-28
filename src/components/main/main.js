import { feedbackForm } from '../feedbackForm/feedbackForm';

export const main = document.createElement('main');
const form = feedbackForm();
main.append(form);
