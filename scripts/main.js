// Array med staff members
let staff = [
    {
    name: "Herko Nilsson",
    title: "Head of HR",
    info: "likes dinosaurs and pasta",
    image: "herko.jpg"
    },
    {
    name: "Göran Persson",
    title: "Head of Banking",
    info: "I don't like U-countries, like Sweden for example",
    image: "GP.jpg"
    },
    {
    name: "Tord Yvel",
    title: "Head of Poetry",
    info: "I like stuff like farts and poop",
    image: "Tord.jpg"
    }, 
    {
        name:"Mao Zedong",
        title:"King of kings",
        info:"i like to kill my people",
        image:"swain.jpg"
    }
]

    // Loopa igenom staff och befolka och lägg in staff kort.
    // TODO refaktor detta
    const cardElements = staff.
map(
    (staff, index) => 
    `<div class="card" onclick="openModal(${index})"><h2>${staff.name}</h2></div>`
    )
.join("");

document.querySelector('#card-container').innerHTML = cardElements;
// exd
const openModal = (index) => {
    document.querySelector("#modal-content").innerHTML = 
    `<div class="modal-header">
        <span onclick="closeModal()">X</span>
    </div>
    <div class="modal-body">
        <h3>${cards[index].name}</h3>
        <p>${cards[index].content}</p>
    </div>`
    ;
    document.querySelector("#modal-wrapper").style.display = "flex";
}

let onSubmit = () => {

    alert("alert")
}