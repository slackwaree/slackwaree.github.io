import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

let postNum = 1;
window.addEventListener('load', loadPost(postNum++));

async function loadPost(postNum) { // posts are named in ascending numerical order
    const url = `https://d20ryw3o58mey6.cloudfront.net/posts/${postNum}.md`;
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
    });
    if (!res.ok) { // Final blog post reached
        console.warn('No more posts avaliable!');
    }
    else {
        const getMD = await res.text();
        renderToHTML(getMD);
        postNum++;
        loadPost(postNum);
    }
}

function renderToHTML(getMD) {
    const blogContainer = document.querySelector('.blog-container');
    const createArticle = document.createElement('article');
    const renderToHTML = marked.parse(getMD);

    createArticle.innerHTML = renderToHTML; // Security headers are active to prevent XSS
    blogContainer.insertBefore(createArticle, blogContainer.firstChild);

    if (postNum = 1) {
        removeHoldState()
    }
}

let postsArray = [];
class NewPost {
    constructor(postTitle, postDate, postTags, postContent) {
        this.postTitle = postTitle;
        this.postDate = postDate;
        this.postTags = postTags;
        this.postContent = postContent;
    }
    method() {
        postsArray.append(this.postTitle, this.postDate, this.postTags, this.postContent)
    }
}

function removeHoldState() {
    const holdStatusText = document.querySelector('#hold-status');
    holdStatusText.textContent = null;
}