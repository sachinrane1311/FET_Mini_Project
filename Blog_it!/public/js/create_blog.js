const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    category: form.Category.value,
    title: form.title.value,
    AutherName: form.AutherName.value,
    body: form.body.value,
    likes: 0,
  }

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('/blogs.html')
}

form.addEventListener('submit', createPost);