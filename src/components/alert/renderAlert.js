import './alert.scss';

export const renderAlert = (responseData) => {
  const { status, message } = responseData;

  const alert = document.createElement('div');
  alert.classList.add('alert', `alert-${status}`);
  alert.classList.add('hidden');

  const content = document.createElement('p');
  content.classList.add('alert-message');
  content.textContent = message;

  alert.append(content);

  document.body.append(alert);

  setTimeout(() => {
    alert.classList.remove('hidden');
    alert.classList.add('visible');
  }, 1);

  setTimeout(() => {
    alert.classList.remove('visible');
    alert.classList.add('hidden');
  }, 2000);

  setTimeout(() => {
    alert.remove();
  }, 3000);
};
