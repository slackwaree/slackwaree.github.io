var moveCount = 0;
const btn = document.getElementById("movingBtn");

function btnClicked() { // controls win state
    const gameState = document.getElementById("gameState");
    const winState = document.getElementById("winState");
    const cheaterState = document.getElementById("cheaterState");
    
    if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0)) { // detects usage of touchscreen (cheating bitch.)
        gameState.style.display = "none";
        cheaterState.style.display = "block";
    }
    else {
        if (moveCount > 1) { // gives the button a chance to move around first
            gameState.style.display = "none";
            winState.style.display = "block";
            document.getElementById("moveCount").innerHTML = moveCount;

            endQuote = ['damn!', 'banned for cheating wtf', 'u just got lucky shut up', 'If you wanted to try and view all of these quotes.. why dont you just return the array that contain them',
            'cant figure out how to return variables in an array (ik probably pretty basic stuff) but if i could then your IP would be in this text box.', 'I lost my Metamask trust wallet coinbase hacked nfts stolen hacked coinbase instagram hacked i need a sugar daddy I got scammed my wallet has been stolen i need a logo my instagram got hacked (pic for reference)',
            'kinda bad lol follow me on insta tho @slaccware', 'u don\'t even get a quote.', 'that was pretty bad lol. nah nvm sorry thgat was kinda mean im soryr', 'i probably couldve done better', 'could be better but not bad..', 'go again #gamblecore', '// dev note: put something motivating here',
            'i wonder what coffee spelled backwards is', 'my cat was here while i was writing this one', 'i just let her in and now she wants out god dammit (context required)', 'クリア！フルコンボ！', 'good score! btw did i mention this website logs ur ip (probably should\'ve right', 'CONGRATS! DM TO CLAIM YOUR $50,000!', 'do these make sense',
            'i need ideas for more quotes. and make them mean. make them really mean.', 'shut up garfield im not letting u in again', 'can i have 40 bucks please', 'i spent most of the time coming up with these dicky quotes', 'btw that vertical line above me is dark blue, not grey :)', 'monospace best font', 'jkesedskenkedssZIWEFNioLSKWFE:H',
            'solve for x using quadratics x^(2)-2x+5(i-:8)=2', 'nice', 'oop?', 'not that hard', ' i\'ll slow down next time', 'NYEOW!', ':3', 'asdfghjkl', 'go again.', 'lol', 'YOU MISS NEXT TIME YOU DIE.', 'garfields here', 'october 3rd 2025', '&nbsp', 'Lorem Ipsum Sit Amet', 'HOLY SHIT BEHIND YOU', 'u smell', 'am i doing something productive writing all these'];
            
            document.getElementById("quote").innerHTML = endQuote[Math.floor(Math.random()*endQuote.length)];
        }
    }
}

btn.addEventListener('mouseover', function () { // Moves button to random pos on-hover.
    btn.style.left = `${Math.ceil(Math.random() * 90)}%`;
    btn.style.top = `${Math.ceil(Math.random() * 90)}%`;
moveCount++;
});