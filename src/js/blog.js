import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

let postsArray = [];
let postNum = 1;
window.addEventListener('load', loadPost(postNum++));

async function loadPost(postNum) { // posts are named in ascending numerical order
    const url = `https://d20ryw3o58mey6.cloudfront.net/posts/${postNum}.md`;
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
    });
    if (!res.ok) { // Final blog post reached
        postsArray.forEach((e) => {
            renderToHTML(e);
        });
        lastPostReached();
        console.warn('No more posts avaliable!');
    }
    else {
        const getMD = await res.text();
        postsArray.push(marked.parse(getMD));
        postNum++;
        loadPost(postNum);
    }
}

const blogContainer = document.querySelector('.blog-container');
const createArticle = document.createElement('article');
function renderToHTML(e) {
    const renderToHTML = marked.parse(e);

    createArticle.innerHTML = renderToHTML; // Security headers are active to prevent XSS
    blogContainer.insertBefore(createArticle, blogContainer.firstChild);

    if (postNum = 1) {
        removeHoldState()
    }
}

function removeHoldState() {
    const holdStatusText = document.querySelector('#hold-status');
    holdStatusText.textContent = null;
}

function lastPostReached() {
    const postCount = localStorage.getItem('lastPost');
    if (postCount == null || postCount != postsArray.length) {
        localStorage.setItem('lastPost', postsArray.length);
        blogContainer.classList.add('newPostAlert')
    }
}
