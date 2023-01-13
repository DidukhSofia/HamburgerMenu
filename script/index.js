
const menu = () => {
    const items = document.querySelector(".items");
    if(items.style.display === "block") {
        items.style.display = "none";
    }
    else {
        items.style.display = "block";
    }
}
