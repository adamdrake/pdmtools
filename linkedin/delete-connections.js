javascript: (function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function removeConnections() {
        for (var i = 0; i < 10; i++) {
            document.getElementsByClassName("search-result__result-link")[0].click();
            await sleep(4000);
            document.getElementsByClassName("pv-s-profile-actions__overflow-toggle")[0].click();
            await sleep(1500);
            document.getElementsByClassName("pv-s-profile-actions--disconnect")[0].click();
            await sleep(1000);
            document.getElementsByClassName("pv-s-profile-actions--unfollow")[0].click();
            await sleep(1000);
            window.history.back();
            await sleep(2000);
        }
    }
}());