document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#newjoke').onclick = function () {
        event.preventDefault();
        document.querySelector('#buildup').innerHTML = '';
        document.querySelector('#punchline').innerHTML = '';
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(data => {
                let x = document.querySelector('#buildup');
                x.innerHTML = data.setup;
                let y = document.querySelector('#punchline');
                let s = "https://twitter.com/intent/tweet?text=" + data.setup + data.punchline;
                setTimeout(() => {
                    y.innerHTML = data.punchline;
                }, 3000);
                var tweetText = data.setup + ' ' + data.punchline;

                document.querySelector('#tweetnow').onclick = () => {
                    let tweetpost = `https://twitter.com/intent/tweet?text=${tweetText}`;
                    window.open(tweetpost);
                }
            });

    }
});