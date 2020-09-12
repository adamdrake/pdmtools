javascript: (function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    async function uncheckAll() {
        var inputs = document.querySelectorAll("input[type=checkbox]");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].checked == true) {
                inputs[i].click();
                await sleep(1000);
            }
        }
    }
}());