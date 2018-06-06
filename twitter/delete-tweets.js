javascript: (function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    var now = new Date;
    var rawTweets = document.querySelectorAll('div.js-original-tweet div.content');
    tweets = Array.from(rawTweets).map(t => ({
        time: t.querySelector('div.stream-item-header small a span.js-short-timestamp').getAttribute('data-time-ms'),
        delete: t.querySelector('div.stream-item-header div.js-more-ProfileTweet-actions div.dropdown div.dropdown-menu ul li.js-actionDelete'),
        unretweet: t.querySelector('div.stream-item-footer div.js-actions div.ProfileTweet-action--retweet button.js-actionRetweet')
    }));
    async function removeTweets(max) {
        for (let i = 0; i < tweets.length; i++) {
            let stamp = new Date(parseInt(tweets[i].time));
            let diff = ((now - stamp) / 1000) / 3600;
            if (diff > max) {
                if (tweets[i].delete != null) {
                    tweets[i].delete.click();
                    await sleep(1000);
                    document.getElementsByClassName('delete-action')[0].click();
                    await sleep(1000);
                } else if (tweets[i].delete == null) {
                    tweets[i].unretweet.click();
                    await sleep(1000);
                }
            }
        }
    }
    var hours = prompt('Delete tweets older than __ hours:', '24')
    if (hours == null) {
        return
    } else {
        removeTweets(hours);
    }
}());