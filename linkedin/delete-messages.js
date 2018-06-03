function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (var i = 1; i < 100; i++) {
        await sleep(1000);
        document.getElementsByClassName("msg-thread__topcard-btn")[1].click();
        await sleep(1000)
        document.getElementsByClassName("msg-topcard__full-width-action-button delete")[0].click();
        await sleep(1000)
        document.getElementsByClassName("msg-modal__button confirm-delete-btn")[0].click();
    }
}


