var rent = [...byClass('rent-value')],
    rentHolder = byId('rent-holder'),
    rentValues = [...byClass('rent')],
    sortButtton = byId('sort-button'),
    areaButton = byId('area-button'),
    floorButton = byId('floor-button'),
    apartmentsButton = byId('apartment-button');



var ascending = (num) => {
    var temp = undefined;
    for (let i = 0; i < rentValues.length; i++) {
        for (let j = i + 1; j < rentValues.length; j++) {
            if (parseInt(rentValues[i].children[num].innerHTML.trim()) > parseInt(rentValues[j].children[num].innerHTML.trim())) {
                temp = rentValues[i];
                rentValues[i] = rentValues[j];
                rentValues[j] = temp;

            }
        }
    }


}


var descending = (num) => {
    var temp = undefined;
    for (let i = 0; i < rentValues.length; i++) {
        for (let j = i + 1; j < rentValues.length; j++) {

            if (parseInt(rentValues[i].children[num].innerHTML.trim()) < parseInt(rentValues[j].children[num].innerHTML.trim())) {
                temp = rentValues[i];
                rentValues[i] = rentValues[j];
                rentValues[j] = temp;

            }
        }
    }

}


var sortASCandDESC = (num) => {

    var value = allByQuery('.rent');

    value.forEach((val, i) => {
        val.remove();
    });

    if (rentHolder.dataset.switch == "on") {
        ascending(num);
        rentHolder.setAttribute('data-switch', 'off');
    } else {
        descending(num);
        rentHolder.setAttribute('data-switch', 'on');
    }

    rentValues.forEach((val, i) => {
        if (i % 2 == 0) {
            replaceClasses(val, 'grey-white-F6', 'grey-white-E5')
        } else {

            replaceClasses(val, 'grey-white-E5', 'grey-white-F6')
        }

        rentHolder.insertAdjacentElement('afterbegin', val)
    })


}

// sortASCandDESC();


sortButtton.addEventListener('click', () => {
    sortASCandDESC(0);
})


floorButton.addEventListener('click', () => {
    sortASCandDESC(1);
})

apartmentsButton.addEventListener('click', () => {
    sortASCandDESC(2);
})

areaButton.addEventListener('click', () => {
    sortASCandDESC(3);
})


