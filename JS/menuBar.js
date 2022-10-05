
var menuBar = () => {

    var shifting = byId('shifting'),
        right_side = byId('right-side'),
        left_side = byId('left-side'),
        summarize = byId('summarized-icons'),
        // menu_small_buttons = byId('menu-small-buttons'),
        // putting the classes inside arrays, so it can be easily used in forEach and other mapping functions
        // also to make the indexing more scope friendly.
        left_button_p = [...byClass('left-button-part')],
        right_button_p = [...byClass('right-button-part')],
        extended = [...byClass('extended')],
        extended_parts = [...byClass('extended-parts')],


        width_array = ['w-6-per', 'w-82-per', 'w-10-per', 'w-80-per', 'w-12-per', 'w-60-per', 'w-16-per', 'w-70-per',
            'w-18-per', 'w-94-per', 'w-20-per', 'w-90-per', 'w-40-per', 'w-88-per', 'w-84-per', 'w-30-per'];


    // this function used for closing the menubar, with resizes
    var menuBarOpen = () => {
        extended_parts.forEach((val, i) => {
            replaceClasses(val, 'vis-on', 'vis-off');
            replaceClasses(val.parentNode, 'h-max-500-px', 'h-max-50-px');
        });
        replaceClasses(summarize, 'pos-right-min-200-per', 'pos-right-0-per');
        replaceClasses(shifting, 'w-100-per', ['rotate-180-deg', 'w-20-per']);
        replaceClasses(right_button_p, 'w-100-per', 'w-40-per');
        replaceClasses(left_button_p, 'pos-left-min-200-per', 'pos-left-0-per');
        // resize();

        menuBarResizeLarge();
    }



    // this function used for opeing the menubar, with resizes
    var menuBarClose = () => {
        extended_parts.forEach((val, i) => {
            replaceClasses(val, 'vis-on', 'vis-off');
            replaceClasses(val.parentNode, 'h-max-500-px', 'h-max-50-px');
            val.parentNode.setAttribute('data-switch', 'off');
        })
        replaceClasses(shifting, ['w-15-per', 'rotate-180-deg'], 'w-100-per');

        replaceClasses(summarize, 'pos-right-0-per', 'pos-right-min-200-per');
        replaceClasses(right_button_p, 'w-40-per', 'w-100-per');
        replaceClasses(left_button_p, 'pos-left-0-per', 'pos-left-min-200-per');

        menuBarResizeSmall();

    }

    // resize, is a function separated from the shifting button click, to decrease complexity and for resizing
    // when the window, is resized.


    var normalSizeSmall = () => {
        replaceClasses(right_side, width_array, 'w-6-per');
        replaceClasses(left_side, width_array, 'w-94-per');
    }

    var menuBarSmallLess1000 = () => {
        replaceClasses(right_side, width_array, 'w-10-per');
        replaceClasses(left_side, width_array, 'w-90-per');
    }


    var menuBarSmallLess700 = () => {
        replaceClasses(right_side, width_array, 'w-12-per');
        replaceClasses(left_side, width_array, 'w-88-per');
    }

    var menuBarSmallLess500 = () => {
        replaceClasses(right_side, width_array, 'w-16-per');
        replaceClasses(left_side, width_array, 'w-84-per');
    }


    var menuBarResizeSmall = () => {
        var window_size = window.outerWidth || window.innerWidth;
        // console.log(window_size)
        if (window_size < 1000 && window_size > 700) {
            menuBarSmallLess1000();
        } else if (window_size <= 700 && window_size > 500) {
            menuBarSmallLess700();
        } else if (window_size <= 500) {
            menuBarSmallLess500();
        } else {
            normalSizeSmall();
        }

        right_side.setAttribute('data-switch', 'off')

    }



    var normalSizeLarge = () => {
        replaceClasses(right_side, width_array, 'w-18-per');
        replaceClasses(left_side, width_array, 'w-82-per');
    }


    var menuBarLargeLess1000 = () => {
        replaceClasses(right_side, width_array, 'w-20-per');
        replaceClasses(left_side, width_array, 'w-80-per');
    }


    var menuBarLargeLess700 = () => {
        replaceClasses(right_side, width_array, 'w-30-per');
        replaceClasses(left_side, width_array, 'w-70-per');
    }


    var menuBarLargeLess500 = () => {
        replaceClasses(right_side, width_array, 'w-40-per');
        replaceClasses(left_side, width_array, 'w-60-per');
    }


    var menuBarResizeLarge = () => {
        var window_size = window.outerWidth || window.innerWidth;

        if (window_size < 1000 && window_size > 700) {
            menuBarLargeLess1000();
        } else if (window_size <= 700 && window_size > 500) {
            menuBarLargeLess700();
        } else if (window_size <= 500) {
            menuBarLargeLess500();
        } else {
            normalSizeLarge();
        }
        // turning switch to on, so it's known that the menubar is open
        right_side.setAttribute('data-switch', 'on')


    }


    // with the window change, 
    window.onresize = () => {
        menuBarClose();
    }

    window.onload = () => {
        menuBarClose();
    }

    shifting.addEventListener('click', (e) => {
        if (right_side.dataset.switch === 'off') {
            menuBarOpen();
        } else {
            menuBarClose();
        }
    });

    extended.forEach((val, i) => {

        val.addEventListener("click", () => {
            if (right_side.dataset.switch === 'on') {
                // console.log("clicked")
                if (val.parentNode.dataset.switch === 'off') {
                    replaceClasses(val.parentNode, "h-max-50-px", "h-max-500-px");
                    replaceClasses(extended_parts[i], "vis-off", "vis-on");
                    var temp = i;
                    extended_parts.forEach((val, j) => {
                        if (j !== temp) {
                            replaceClasses(val.parentNode, "h-max-500-px", "h-max-50-px");
                            replaceClasses(val, "vis-on", "vis-off");
                            val.parentNode.setAttribute('data-switch', 'off')
                        }
                    })


                    val.parentNode.setAttribute('data-switch', 'on')
                } else {
                    replaceClasses(val.parentNode, "h-max-500-px", "h-max-50-px");
                    replaceClasses(extended_parts[i], "vis-on", "vis-off");

                    val.parentNode.setAttribute('data-switch', 'off')
                }
            } else {

                menuBarOpen();

                if (val.parentNode.dataset.switch === 'off') {
                    replaceClasses(val.parentNode, "h-max-50-px", "h-max-500-px");
                    replaceClasses(extended_parts[i], "vis-off", "vis-on");
                    val.parentNode.setAttribute('data-switch', 'on')
                }



            }
        })
    });







}

menuBar();