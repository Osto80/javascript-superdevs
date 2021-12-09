// Array med staff members
let staff = [
    {
    name: "Da-Neil Svensson",
    title: "Worst at videogames",
    info: "He may be worst at videogames, but he has an extensive knowledge of fighting games. Likes to not have time to sleep",
    image: "daneil.png"
    },
    {
    name: "Isak Lejon",
    title: "Jumping Maniac",
    info: "'I don't like U-countries, like Sweden for example, but I like jumping. Like really much!'",
    image: "isak.png"
    },
    {
    name: "Arvid Borensved",
    title: "the IT Alien",
    info: "Like winning? Then IT Alien is your guy, keeping you in the winners lane all the time!",
    image: "italien.png"
    },
    {
        name:"Mao Zedong",
        title:"King of kings",
        info:"i like to kill my people",
        image:"kevin-mccallister.jpg"
    }
]
const images = [
    {
        filename:"img01-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption"
    },
    {
        filename:"img02-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption"
    },
    {
        filename:"img03-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption"
    },
    {
        filename:"img04-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption"
    },
    {
        filename:"img05-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption"
    },
    {
        filename:"img06-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption"
    }
]

let services = [
    {
        topic : "Hacking",
        summary : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere sapiente fuga, animi quibusdam explicabo velit totam accusantium tenetur, quo sint rem modi praesentium id soluta dolore quas, provident laudantium?",
        image : "service-01.jpg"
    },
    {
        topic : "Winning",
        summary : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere sapiente fuga, animi quibusdam explicabo velit totam accusantium tenetur, quo sint rem modi praesentium id soluta dolore quas, provident laudantium?",
        image : "service-04.jpg"
    },
    {
        topic : "Racing",
        summary : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere sapiente fuga, animi quibusdam explicabo velit totam accusantium tenetur, quo sint rem modi praesentium id soluta dolore quas, provident laudantium?",
        image : "service-02.jpg"
    },
    {
        topic : "Jumping",
        summary : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere sapiente fuga, animi quibusdam explicabo velit totam accusantium tenetur, quo sint rem modi praesentium id soluta dolore quas, provident laudantium?",
        image : "service-03.jpg"
    }
]

//burger meny
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

const serviceCardElements = services.
    map((services) =>
        `<div class="service-boxes"
        style="background:url(./media/img/darkgrey.png),url(./media/img/${services.image})">
        <h2>${services.topic}</h2>
        <p class="service-p">${services.summary}</p>
        </div>`
    ).join("");

document.querySelector('#service-container').innerHTML = serviceCardElements;

// Loopa igenom staff och befolka och lägg in staff kort.
// TODO refaktor detta
const cardElements = staff.
map(
    (staff, index) =>
    `<div class="card"
    style="background-image:url(./media/img/darkgrey.png),url(./media/img/staff/${staff.image})"
    onclick="openCardModal(${index})">
    <h2>${staff.name}</h2></div>`
    )
.join("");

document.querySelector('#card-container').innerHTML = cardElements;

const openCardModal = (index) => {
    document.querySelector("#card-modal-content").innerHTML =
    `<div class="card-modal-header">
        <a onclick="closeModal()">x (close)</a>
    </div>
    <div class="card-modal-body">
        <img src="./media/img/staff/${staff[index].image}">
        <h3>${staff[index].name}</h3>
        <h4>${staff[index].title}</h4>
        <p>${staff[index].info}</p>
    </div>`
    ;
    document.querySelector("#card-modal-wrapper").style.display = "flex";
}

const closeModal = () => {
    document.querySelector("#card-modal-wrapper").style.display = "none";
}

// Visar en slideshow på sidan som ska leda till en Lightbox med thumbs

let counter = 0;
function showSlides(){
    let imageMain = document.querySelector("#image-main");
    setTimeout(() => {
        imageMain.setAttribute("src", `./media/img/resize/${images[counter].filename}`);
        counter++;
    }, 3000);
    if (counter === images.length) {
      counter = 0;
    }
};

// Ladda ikon dyker upp och rensar form fälten efter 3 sek
// Kollar med en REGEX att epost har rätt format, och om allt stämmer, körs fake laddningen
const onSubmit = () => {
    const name = document.forms["contact-form-name"]['input2'].value;
    // Unused --- const formcheck = document.querySelectorAll(".formcheck");
        document.querySelector("#loading-container").style.display = "flex"
    setTimeout(() => {
        document.querySelector("#contact-form").reset();
        document.querySelector("#loading-container")
        .innerHTML = `<h2>Tack ${name}, för ditt bidrag!</h2><br><a href="javascript:closeLoadingBox();">[Stäng denna rutan]</a>`
    } , 3000 );
}

const closeLoadingBox = () => {
    document.querySelector("#loading-container").style.display = "none"
    document.querySelector("#loading-container").innerHTML = '<div class="loading"></div>'
}

const validateEmail = () => {
    // alternativ ---- const test2 = document.querySelector('contact-form').value;
    const test = document.forms["contact-form-name"]['input1'].value;
    if (!validateEmailPattern(test)) {
        alert('Du har inte fyllt i en giltig epost-adress!');
        return false;
    }else{
        console.log("korrekt ifylld epost-adress");
        return true;
    }
}

const validateEmailPattern = (emailVariabel) => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailVariabel);
}

window.onload = (event) => {
    console.log('page is fully loaded');
    setInterval(showSlides, 2000);
};
