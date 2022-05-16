// //<form id="user-submit">
// <input class="card" id="post-title">username
// <input class="card" id="post-text">email
// <button id="submit">New Post</button>////password

const submitPost = function (event) {
    event.preventDefault();
    const postTitle = document.querySelector('#post-title').value.trim();
    const postText = document.querySelector('#post-text').value.trim();
    

    if (postTitle && postText ) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                postTitle,
                postText,
                ////password//
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        const res = await response.json();
        console.log(res);
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
}

    
document.querySelector('#user-submit').addEventListener('submit')





