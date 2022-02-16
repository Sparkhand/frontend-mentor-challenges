const selectors = document.querySelectorAll(".selector");

const removeSelected = () => {
    for(let selector of selectors) {
        selector.classList.remove("selected");
    }
}

const currentHours = document.querySelectorAll(".hours");
const removeCurrentHours = () => {
    for(let item of currentHours) {
        item.classList.remove("visible");
    }
}

const lastHours = document.querySelectorAll(".last");
const removeLastHours = () => {
    for(let item of lastHours) {
        item.classList.remove("visible");
    }
}

for(let selector of selectors) {

    selector.addEventListener('click', () => {
        removeSelected();
        selector.classList.add("selected");
        removeCurrentHours();
        removeLastHours();

        if(selector.classList.contains("daily")) {
            for(let item of currentHours) {
                if(item.classList.contains("daily")) {
                    item.classList.add("visible");
                }
            }
            for(let item of lastHours) {
                if(item.classList.contains("daily")) {
                    item.classList.add("visible");
                }
            }
        } else if(selector.classList.contains("weekly")) {
            for(let item of currentHours) {
                if(item.classList.contains("weekly")) {
                    item.classList.add("visible");
                }
            }
            for(let item of lastHours) {
                if(item.classList.contains("weekly")) {
                    item.classList.add("visible");
                }
            }
        } else if(selector.classList.contains("monthly")) {
            for(let item of currentHours) {
                if(item.classList.contains("monthly")) {
                    item.classList.add("visible");
                }
            }
            for(let item of lastHours) {
                if(item.classList.contains("monthly")) {
                    item.classList.add("visible");
                }
            }
        }
    });

}
