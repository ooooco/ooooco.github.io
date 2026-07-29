var posts=["2026/07/29/瓦学家_开篇/","2026/07/28/players/","2026/07/27/crosshair-library/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };