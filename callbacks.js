const posts = [
  { title: 'Post one', body: 'This is the post one'},
  { title: 'Post two', body: 'This is the post two'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('callbacks').innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title : 'Post Three', body: 'This is post three'}, getPosts);
