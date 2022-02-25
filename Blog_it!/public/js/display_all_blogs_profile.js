
const container = document.querySelector('.blogs');

const renderPosts = async (term) => {
  console.log(term);

  let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';

  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts = await res.json();

  let template = '';
  posts.forEach(post => {
    template += `
        <div class="post">
          <div class="card mb-4">
            <!-- <a href="#!"><img class="card-img-top" src="../images/dummy_image.jpg" alt="dummy" /></a> -->
            <div class="card-body">
              <div class="small text-muted">${post.blogposttime}</div>
              <h2 class="card-title">${post.title}</h2>
              <p class="card-text">${post.body.slice(0, 200)}...</p>
              <a class="btn btn-primary" href="../html/read_Blog">Read more →</a>
              <h5 class="card-title">${post.AutherName}</h5>
              <span class="badge badge-cate">
                  <i class="fas fa-thumbs-up" aria-hidden="true"></i>${post.likes}
                  <span class="sr-only">likes</span>
              </span>
            </div>
          </div>
        </div>`
  });

  container.innerHTML = template;
}

// searchForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   renderPosts(searchForm.term.value.trim());
// })

window.addEventListener('DOMContentLoaded', () => renderPosts());
