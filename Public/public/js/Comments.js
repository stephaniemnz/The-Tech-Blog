const { post } = require("../../../Develop/controllers");

const commentFormHandler = async (event) => {
    event.preventDefault();
    
    const body = document.querySelector('#comment-body').value.trim();
    const post_route = window.location.toString().split('/');
    const post_id = post_route[post_route.length - 1];

    if (body) {
        const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ body, post_id }),
        headers: {
            'Content-Type': 'application/json',
        },
        });
    
        if (response.ok) {
        document.location.reload();
        } else {
        alert('Failed to create comment');
        }
    };
    };

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);