function applyTheme(theme){
    document.body.classList.remove("theme-auto","theme-light","theme-dark");
    document.body.classList.add(`theme-${theme}`);
}


document.addEventListener("DOMContentLoaded", () => {
    const saveTheme = localStorage.getItem('theme') || "auto";

    applyTheme(saveTheme)

    for(const opationElement of document.querySelectorAll('.header_select option')){
        opationElement.selected = saveTheme === opationElement.value
    }
  

    document.querySelector('.header_select').addEventListener("change", function () {
        localStorage.setItem("theme", this.value)
        applyTheme(this.value)
        console.log(this.value)
    })
})
