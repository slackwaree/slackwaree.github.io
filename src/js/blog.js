
async function loadPost(postNum) {
    postNum = 0;
    const url = `https://d20ryw3o58mey6.cloudfront.net/posts/${postNum}.md`;
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
    });
    if (!res.ok) throw new Error();
    const md = await res.text();
    console.log(md);
}
window.addEventListener('load', loadPost());