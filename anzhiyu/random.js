var posts=["2026/07/27/这是一篇新的博文/","2026/07/27/Hello-World/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };