function countSelected(selectObject) {
    letNumberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if(selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

const btn =
document.getElementById("btn");

btn.addEventListener("click"), () => {
    const musicTypes = document.selctForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});