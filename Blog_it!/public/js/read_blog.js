const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
// const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id);
  if (!res.ok) {
    window.location.replace("/");
  }
  const post = await res.json();

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    <p>Blog Posted On: ${post.blogposttime}</p>
    <p>Auther Name: ${post.AutherName}</p> 
    <p>Category: ${post.category}</p>
  `

  container.innerHTML = template;
}

// deleteBtn.addEventListener('click', async () => {
//   const res = await fetch('http://localhost:3000/posts/' + id, {
//     method: 'DELETE',
//   });
//   window.location.replace("/allblogsWithSignIn.html");
// })

window.addEventListener('DOMContentLoaded', renderDetails);


$(document).ready(
  () => {
      $('button').click(
          (e) => {
              e.preventDefault();
              var name = $('#new_comment_name').val();
              var email =$('#new_comment_email').val();
              var commenttext = $('#new_comment_text').val();

      if(name=='' || email=='' || commenttext=='' ){
      alert("name and mail not entered");
      }
      else{
        {
              $.ajax({
                  url: " http://localhost:3000/commentusers",
                  method:"POST",
                  data: {
                      "name": name,
                      "email": email,
                      "commenttext":commenttext,
                  },
                  dataType:"json",
                  success:(x)=> {
                      
                      window.location="../html/read_blog.html";
                      alert(name + "...your comment done Successfully  !");
                      console.log(x);
               
                      window.location.replace('../html/ReadBlog.html')
      
                  }
                 
                  
              })
              
          }
              
          }
          }

      )
           
  })
