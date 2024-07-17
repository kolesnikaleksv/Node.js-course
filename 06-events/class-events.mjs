import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on('LikePost', (userName) => {
      console.log(`${userName} liked your post`);
    });
    this.on('error', (err) => {
      console.error(err);
    });
  }

  like(userName) {
    if (!userName) {
      return this.emit('error', new Error('No username in the like request!'));
    }
    this.likesQty += 1;
    this.emit('LikePost', userName);
  }
}

const myPost = new Post('Oleksandr', 'My great text');

// myPost.on('LikePost', (userName) => {
//   console.log(`${userName} liked your post`);
// });

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
// myPost.like();
// console.log(myPost.likesQty);

myPost.like('Jon');

setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like('Joshua'), 2000);
