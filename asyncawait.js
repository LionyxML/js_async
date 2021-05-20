const posts3 = [
  { title: 'Post one', body: 'This is the post one'},
  { title: 'Post two', body: 'This is the post two'}
];

function getPosts3() {
  setTimeout(() => {
    let output = '';
    posts3.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('asyncawait').innerHTML = output;
  }, 1000);
}

function createPost3(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts3.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      }
    }, 2000);
  });
}

async function init() {
  await createPost3({ title: 'Post Three', body: 'This is post three'});

  getPosts3();
}

init();

async function fetchUsers() {
  const res = await fetch ('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  console.log(data);
}


fetchUsers();
