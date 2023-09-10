const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#login-username').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (userName && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.href = '/dashboard';
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.login-form')
  ?.addEventListener('submit', loginFormHandler);


