javascript: (function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function removePosts() {
        while (document.getElementsByClassName("control-panel-trigger").length > 0) {
            document.getElementsByClassName("control-panel-trigger")[0].click();
            await sleep(1000);
            document.getElementsByClassName("option-button__delete")[0].click();
            await sleep(1000);
            document.getElementsByClassName("feed-shared-decision-modal__confirm-button")[0].click();
            await sleep(2000);
            window.scrollBy(0, 20);
        }
    }
    removePosts();
}());
