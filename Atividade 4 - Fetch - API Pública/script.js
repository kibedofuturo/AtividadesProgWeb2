document.getElementById('viewPostsButton').addEventListener('click', function() {
    getRecentPosts();
  });
  
  function getRecentPosts() {
    const subreddit = document.getElementById('subreddit').value;
    const url = `https://www.reddit.com/r/${subreddit}/new.json?limit=5`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const posts = data.data.children;
        const postsList = document.getElementById('posts');
        postsList.innerHTML = '';
        posts.forEach(post => {
          const postElement = document.createElement('li');
          postElement.innerHTML = `
            <h2>${post.data.title}</h2>
            <p>Author: ${post.data.author}</p>
            <p>Score: ${post.data.score}</p>
            <p>Comments: ${post.data.num_comments}</p>
            <a href="https://www.reddit.com${post.data.permalink}" target="_blank">View on Reddit</a>
          `;
          postsList.appendChild(postElement);
        });
      })
      .catch(error => console.error(error));
  }
  