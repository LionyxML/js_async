const posts2 = [
  { title: 'Post one', body: 'This is the post one'},
  { title: 'Post two', body: 'This is the post two'}
];

function getPosts2() {
  setTimeout(() => {
    let output = '';
    posts2.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('promises').innerHTML = output;
  }, 1000);
}

function createPost2(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts2.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      }
    }, 2000);
  });
}

createPost2({ title : 'Post Three', body: 'This is post three 2'})
.then(getPosts2)
.catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
setTimeout(resolve, 2000, 'GoodBye!'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then( values => console.log(values));
