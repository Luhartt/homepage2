const colors = document.querySelectorAll("div.color");

const colorList = {
    "1": {
        "--bg-color-main": "#191919",
        "--bg-color-center": "#171717"
    },
    "2": {
        "--bg-color-main": "#381111",
        "--bg-color-center": "#250606"
    },
    "3": {
        "--bg-color-main": "#500138",
        "--bg-color-center": "#28001D"
    },
    "4": {
        "--bg-color-main": "#2D003D",
        "--bg-color-center": "#1A0023"
    },
    "5": {
        "--bg-color-main": "#010041",
        "--bg-color-center": "#040030"
    },
    "6": {
        "--bg-color-main": "#003546",
        "--bg-color-center": "#001921"
    },
    "7": {
        "--bg-color-main": "#19664A",
        "--bg-color-center": "#1F3D32"
    },
}

function setColors() {
    colors.forEach(color => {
        color.addEventListener("click", (e) => {
            const className = e.target.classList[1]
            const colorName = colorList[className]
            Object.entries(colorName).forEach(([key, value]) => {
                document.documentElement.style.setProperty(key, value);
            })
        })
    })
}


document.addEventListener("DOMContentLoaded", () => {
    setColors();
})

