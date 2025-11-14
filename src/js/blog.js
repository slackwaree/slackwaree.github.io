import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

let postNum = 0;
window.addEventListener('load', loadPost(postNum++));

async function loadPost(postNum) { // posts are named in ascending numerical order
    const url = `https://d20ryw3o58mey6.cloudfront.net/posts/${postNum}.md`;
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
    });
    if (!res.ok) throw new Error('No more posts avaliable!');
    const getMD = await res.text();
    renderToHTML(getMD);
}

function renderToHTML(getMD) {
    const blogContainer = document.querySelector('.blog-container');
    const createArticle = document.createElement('article');
    const renderToHTML = marked.parse(getMD);

    createArticle.innerHTML = renderToHTML; // Security headers are active to prevent XSS
    blogContainer.appendChild(createArticle);

    if (postNum = 1) {
        removeHoldState()
    }
}

function removeHoldState() {
    const holdStatusText = document.querySelector('#hold-status');
    holdStatusText.remove();
}