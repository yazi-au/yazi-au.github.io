var posts=["2025/10/15/MyPost/","2025/10/25/myNewBlog/","2025/10/25/RlangBasic/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };