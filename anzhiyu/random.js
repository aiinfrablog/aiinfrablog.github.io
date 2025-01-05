var posts=["2025/01/04/My-New-Post/","2025/01/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };