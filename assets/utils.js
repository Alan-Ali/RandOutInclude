
// The  OR is used for when we are going to send back arrays, and 
// it will be dealt with using OR logical operators 
const containsOR = (query,css_class) =>{

    if (Array.isArray(css_class)) {
        for (let i = 0; i < css_class.length; i++) {
            if (query.classList.contains(css_class[i])) {
                return true;
            }
        }
    } else {
        if (query.classList.contains(css_class)) {
            return true;
        }
    }
    return false;
};

// The AND is used for when we are going to send back arrays, and
// it will be dealt with using AND logical operators
const containsAND = (query,css_class) => {

    if (Array.isArray(css_class)) {
        for (let i = 0; i < css_class.length; i++) {
            if(!query.classList.contains(css_class[i])) {
                 return false;
            }
        }

    }else{
        if (!query.classList.contains(css_class)) {
            return false;
        }
    }
    return true;
};





const replaceClasses = (element, css_class, replacement) => {
    // console.log()
    if (Array.isArray(css_class)) {
        if(Array.isArray(element)){
            for(let j = 0; element.length; j++){
                for (let i = 0; i < css_class.length; i++) {
                    if (element[j].classList.contains(css_class[i])) {
                        element[j].classList.remove(css_class[i]);
                    }
                }
                if (Array.isArray(replacement)) {
                    for (let i = 0; i < replacement.length; i++) {
                        element[j].classList.add(replacement[i]);
                    }
                } else {
                    element[j].classList.add(replacement);
                }
            }

        }else{
            for (let i = 0; i < css_class.length; i++) {
                if (element.classList.contains(css_class[i])) {
                    element.classList.remove(css_class[i]);
                }
            }
            if (Array.isArray(replacement)) {
                for (let i = 0; i < replacement.length; i++) {
                    element.classList.add(replacement[i]);
                }
            } else {
                element.classList.add(replacement);
            }
        }



    } else {
        if(Array.isArray(element)){
            for(let i = 0; i < element.length;i++){
                if (element[i].classList.contains(css_class)) {
                    element[i].classList.remove(css_class);
                    if (Array.isArray(replacement)) {
                        for (let j = 0; j < replacement.length; j++) {
                            element[i].classList.add(replacement[j]);
                        }
                    } else {
                        element[i].classList.add(replacement);
                    }

                }
            }
        }else if (element.classList.contains(css_class)) {
            element.classList.remove(css_class);
            if (Array.isArray(replacement)) {
                for (let i = 0; i < replacement.length; i++) {
                    element.classList.add(replacement[i]);
                }
            } else {
                element.classList.add(replacement);
            }

        }

    }
    // return element;
}


const byQuery = (query) => {
    return document.querySelector(query)
}

const allByQuery = (query) => {
    return document.querySelectorAll(query)
}

const byTag = (tag_name) => {
    return document.getElementsByTagName(tag_name)
}

const byClass = (class_name) => {
    return document.getElementsByClassName(class_name)
}
const byId = (id_name) => {
    return document.getElementById(id_name)
}


const byName = (tag_name) => {
    return document.getElementsByName(tag_name)
}
const write = (word) => {
    return document.write(word);
}
