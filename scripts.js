let container = document.getElementById("container");
let dWidth = document.getElementById("d-width");
let dHeight = document.getElementById("d-height");
let dBtn = document.getElementById("d-btn");
let pBtn = document.getElementById("p-btn");
let limit = document.getElementById("limit-reached");
let width = 16
let height = 16
let wxh = width * height

let etch = document.createElement("div")
etch.classList.add("etch")
etch.style.width = wxh + "px"
etch.style.height = wxh + "px"
etch.style.border = "3px dashed lemonchiffon"
etch.style.display = "flex"
etch.style.flexWrap = "wrap"
container.appendChild(etch)

for (let i = 0; i < parseInt(wxh); i++) {
    let n = document.createElement("div")
    n.classList.add("sq", "sq-" + i)
    n.style.width = width + "px"
    n.style.height = height + "px"
    // n.innerHTML = Math.sqrt(256)
    etch.appendChild(n)
}

let squares = document.querySelectorAll(".sq")

squares.forEach(sq => {
    sq.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
    })
})

dBtn.addEventListener("click", () => {

    squares.forEach(sq => {
        sq.remove()
    })

    if (dWidth.value <= 30 && dHeight.value <=30) {

    
    width = dWidth.value 
    height = dHeight.value
    wxh = width * height

    let www = wxh - 256;

    console.log(width, height, wxh)

    etch.style.width = wxh + "px"
    etch.style.height = wxh + "px"



    for (let i = 0; i < parseInt(wxh); i++) {
        let n = document.createElement("div")
        n.classList.add("sq")
        n.style.width = width + "px"
        n.style.height = height + "px"
        // n.innerHTML = Math.sqrt(256)
        etch.appendChild(n)
    }


    let newSquares = document.querySelectorAll(".sq")
    console.log(newSquares)
    newSquares.forEach(sq => {
        sq.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        })
    })
    shade.style.display = "none"
    changeDimensions.style.display = "none"
    pBtn.style.visibility = "visible"
    } else {
        limit.style.visibility = "visible"
    }

})

let shade = document.querySelector('.shade')
let changeDimensions = document.getElementById('change-dimensions')

const openDimensionsPopUp = () => {
    shade.style.display = "block";
    changeDimensions.style.display = "block"

    let newSq = document.querySelectorAll(".sq")
    newSq.forEach(sq => {
        sq.remove()
    })

    pBtn.style.visibility = "hidden"
}


shade.addEventListener("click", (e) => {
    console.log(e)
    shade.style.display = "none"
    changeDimensions.style.display = "none"
})

const closeModal = () => {
    shade.style.display = "none"
    changeDimensions.style.display = "none"
}