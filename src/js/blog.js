
// async function loadPost(postNum) {
//     postNum = 0;
//     const url = `https://d20ryw3o58mey6.cloudfront.net/posts/${postNum}.md`;
//     const res = await fetch(url, {
//         method: 'GET',
//         mode: 'cors',
//     });
//     if (!res.ok) throw new Error();
//     const md = await res.text();
//     console.log(md);
// }
// window.addEventListener('load', loadPost());
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
// or const { marked } = require('marked');

const renderToHTML = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
console.log(renderToHTML)