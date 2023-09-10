const addNewComment = async (event) => {
  event.preventDefault();
  const comment = document.getElementById('comment-textarea').value;
  const blogId = window.location.pathname.split('/').pop();
  const reqBody = {
    comment,
    blogId,
  };

  const response = await fetch('/api/comment', {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    location.reload();
  } else {
    location.href = '/login';
  }
};

document
  .getElementById('comment-form')
  .addEventListener('submit', addNewComment);