function getTimePartsFromPickable(timePickable){
    const pattern = /^(\d+):(\d+) (am|pm)$/;
    const [hour, minute, meridiem] = Array.from(timePickable.value.match(pattern).splice(1));
    return {
        hour,
        minute,
        meridiem
    };
}

const exampleTimePickable = document.querySelector(".time_pickable");
console.log(getTimePartsFromPickable(exampleTimePickable));