javascript: (function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function aForEach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            await callback(array[i], i, array)
        }
    }

    var now = new Date;
    var tweets = document.querySelectorAll("div.js-original-tweet div.content");
    tweets = Array.from(tweets);
    objs = tweets.map(t => ({
        time: t.querySelector("div.stream-item-header small a span.js-short-timestamp").getAttribute("data-time-ms"),
        delete: t.querySelector("div.stream-item-header div.js-more-ProfileTweet-actions div.dropdown div.dropdown-menu ul li.js-actionDelete"),
        unretweet: t.querySelector("div.stream-item-footer div.js-actions div.ProfileTweet-action--retweet button.js-actionRetweet")
    }));

    async function removeTweets(max) {
        aForEach(objs, async i => {
            let stamp = new Date(parseInt(i.time));
            let diff = ((now - stamp) / 1000) / 3600;
            if (diff > max) {
                if (i.delete != null) {
                    i.delete.click();
                    await sleep(1000);
                    document.getElementsByClassName("delete-action")[0].click();
                    await sleep(1000);
                } else if (i.delete == null) {
                    i.unretweet.click();
                    objs.splice(i,1);
                    await sleep(1000);
                }
            }
            window.scrollBy(0, 20);
        })
    }
    removeTweets(prompt('Delete tweets older than __ hours:', '24'))
}());