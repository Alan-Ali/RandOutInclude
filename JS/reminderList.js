var notif_button = [...byClass('notif-button')];

notif_button.forEach((val, i) => {
    val.addEventListener('click', (e) => {
        // console.log(val.childNodes[0]);
        // containsOR(val.firstElementChild,'fa-bell'
        if (val.dataset.notif === "on") {
            // console.log("fa-bell")
            replaceClasses(val.firstElementChild, ['fa-bell', 'cust-text-secondary-second-der'], ['fa-bell-slash', 'cust-text-primary']);
            val.setAttribute('data-notif', 'off');
        } else {
            // console.log("fa-bell-slash")
            replaceClasses(val.firstElementChild, ['fa-bell-slash', 'cust-text-primary'], ['fa-bell', 'cust-text-secondary-second-der']);
            val.setAttribute('data-notif', 'on');
        }
    });
});