const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    location.reload();
  } else {
    alert('Failed to log out.');
  }
};

document.getElementById('logout-btn').addEventListener('click', logout);
