const signupFormHandler = async (event) => {
  event.preventDefault();

  const password = document.querySelector('#signup-password').value.trim();
  const name = document.querySelector('#signup-username').value.trim();

  if (name && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#signup-form')
  ?.addEventListener('submit', signupFormHandler);