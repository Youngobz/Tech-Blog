async function createNewPost (event) {
  event.stopPropagation();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (title && content) {
    const response = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.href = '/dashboard';
    } else {
      location.href = '/login';
    }
  }
};

document
  .getElementById('create-btn')
  ?.addEventListener('click', createNewPost);


function openNewPostForm() {
  location.href = '/blog/add';
}

function openUpdatePostForm(event) {
  event.stopPropagation();
  const blogId = event?.target?.dataset?.id;
  location.href = `/blog/update/${blogId}`;
}

async function updatePost(event) {
  const blogId = event?.target?.dataset?.id;
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (title && content) {
    const response = await fetch(`/api/blog/${blogId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      location.href = '/dashboard';
    } else {
      location.href = '/login';
    }
  }
}

async function deletePost(event) {
  const blogId = event?.target?.dataset?.id;
  const response = await fetch(`/api/blog/${blogId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    location.href = '/dashboard';
  } else {
    location.href = '/login';
  }
}

function submitFormHandler(event) {
  event.preventDefault();
}

document
  .getElementById('new-post')
  ?.addEventListener('submit', submitFormHandler);

document?.getElementById('add-post')?.addEventListener('click', openNewPostForm);
const editBtnList = document?.getElementsByClassName('edit-btn');

for (let i=0; i<editBtnList.length; i++) {
  const currEditBtnEle = editBtnList[i];
  currEditBtnEle?.addEventListener('click', openUpdatePostForm);
}

document?.getElementById('update-btn')?.addEventListener('click', updatePost);
document?.getElementById('delete-btn')?.addEventListener('click', deletePost);