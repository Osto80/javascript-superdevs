// Array med staff members
let staff = [
    {
    name: "Da-Neil Svensson",
    title: "Worst at videogames but played most fighting games",
    info: "likes to not have time to sleep",
    image: "img07.jpg.PNG"
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
const images = [
    {
        filename:"img01.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption" 
    },
    {
        filename:"img02.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption" 
    },
    {
        filename:"img03.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption" 
    },
    {
        filename:"img04.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption" 
    },
    {
        filename:"img05.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption" 
    },
    {
        filename:"img06.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption" 
    },
    {
        filename:"img07.jpg.PNG" ,
        alt:"BILD PÅ DA-NEIL",
        description:"Supreme old man DA-NEIL" 
    }
]

const navMenu = () => {
    let menu = document.querySelector("#menu-links");
    let burgerIcon = document.querySelector("#iconstyle");    
    if (menu.style.display === "grid") {
        burgerIcon.setAttribute("class", "fa fa-bars")
        menu.style.display = "none";
    } else {
        burgerIcon.setAttribute("class", "fa fa-times")
        menu.style.display = "grid";
    }
}

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

let counter = 0;



function showSlides(){
    let imageMain = document.querySelector("#image-main");
    setTimeout(() => {
        imageMain.setAttribute("src", `./media/img/${images[counter].filename}`);
        counter++;
    }, 3000);
    if (counter === images.length) {
      counter = 0;
    }
};

/*function showSlides(){
    setInterval(() =>
        {
           for(let img in images) {
            console.log(images[img].filename);
            setTimeout(() => {
                document.querySelector("#image-main").setAttribute("src",`./media/img/${images[img].filename}`)
            }, 2000);
           }},14000);
};*/
// Ladda ikon dyker upp och rensar form fälten efter 3 sek
const onSubmit = () => {
    const formcheck = document.querySelectorAll(".formcheck");
        document.querySelector("#loading-container").style.display = "flex"
    setTimeout(() => {
        document.querySelector("#contact-form").reset();
        document.querySelector("#loading-container")
        .innerHTML = '<h2>TACK FÖR DITT BIDRAG!</h2><br><a href="javascript:closeLoadingBox();">[Stäng denna rutan]</a>'
    } , 3000 );
}

const closeLoadingBox = () => {
    document.querySelector("#loading-container").style.display = "none"
    document.querySelector("#loading-container").innerHTML = '<div class="loading"></div>'
}

const validateEmail = () => {
    const test = document.forms["contact-form-name"]['input1'].value; 
    if (test === "") {
        alert('Du måste fylla i din e-postadress!');
        return false;
    }else{
        console.log("här blev det sant");
        return true;
    }
}



window.onload = (event) => {
    console.log('page is fully loaded');
    setInterval(showSlides, 2000);
};
    
