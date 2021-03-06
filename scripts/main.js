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
    info: "Like winning? Then IT Alien is your guy, keeping you in the winners lane all the time! t.ex italien",
    image: "italien.png"
    },
    {
        name:"Mao Zedong",
        title:"King of kings",
        info:"i like to kill my people",
        image:"kevin-mccallister.jpg"
    }
]
//Array med bildobjekt
const images = [
    {
        filename:"img01-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption 1"
    },
    {
        filename:"img02-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption 2"
    },
    {
        filename:"img03-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption 3"
    },
    {
        filename:"img04-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption 4"
    },
    {
        filename:"img05-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption 5"
    },
    {
        filename:"img06-rz.jpg" ,
        alt:"Todo image alt text",
        description:"TODO Desctiption 6"
    }
]
//array till servicecards
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

// Shows pictures with thumbnails
const openLightbox = (filename) => {
  let imageMain = document.querySelector("#main-img");
  imageMain.classList.add("pause");
  setMainImage(filename);
  document.querySelector("#lightbox-wrapper").style.display = "flex";
};

//Slideshow till mainpage
let counter = 1;
function imageElems() {
  let imageMain = document.querySelector("#main-img");
  if (!imageMain.classList.contains("pause")) {
    setTimeout(() => {
      imageMain.setAttribute("src", `./media/img/resize/${images[counter].filename}`);
      imageMain.setAttribute("alt", `${images[counter].alt}`);
      imageMain.setAttribute("onclick", `openLightbox('${images[counter].filename}')`);
      counter++;
    }, 3000);
    if (counter === images.length) {
      counter = 0;
    }
  }
}

const imageThumbs = images.map(img => `<img alt="${img.alt}" src="./media/img/resize/${img.filename}" onclick="setMainImage('${img.filename}')" class="thumbnail">`);

//
const setMainImage = (filename) => {
  document
    .querySelector("#main-image")
    .setAttribute("src", `./media/img/resize/${filename}`);
  setActiveThumbnail();
}

// Sets the active thumbnail with border
const setActiveThumbnail = () => {
  const thumbs = document.querySelectorAll(".thumbnail");
  thumbs.forEach(thumb => {
    if(thumb.src === document.querySelector("#main-image").src) {
      thumb.style.border = "2px solid orange";
    } else {
      thumb.style.border = "0px";
    }
  });
};

// Switches to previous image
const prevImg = () => {
  const thumbs = document.querySelectorAll(".thumbnail");
  for(let i = 0; i < thumbs.length; i++) {
    if(thumbs[i].src === document.querySelector("#main-image").src && i !== 0) {
      document
        .querySelector("#main-image")
        .setAttribute("src", thumbs[i -= 1].src);
      setActiveThumbnail();
    } else if(thumbs[i].src === document.querySelector("#main-image").src && i == 0) {
      document
        .querySelector("#main-image")
        .setAttribute("src", thumbs[i += thumbs.length - 1].src);
      setActiveThumbnail();
    }
  }
}

// Switches to next image
const nextImg = () => {
  const thumbs = document.querySelectorAll(".thumbnail");
  for(let i = 0; i < thumbs.length; i++) {
    if(thumbs[i].src === document.querySelector("#main-image").src && i !== thumbs.length - 1) {
      document
        .querySelector("#main-image")
        .setAttribute("src", thumbs[i += 1].src);
      setActiveThumbnail();
    } else if(thumbs[i].src === document.querySelector("#main-image").src && i == thumbs.length - 1) {
      document
        .querySelector("#main-image")
        .setAttribute("src", thumbs[i - i].src);
      setActiveThumbnail();
    }
  }
}

//st??nger ner lightboxen, och resumear slideshow p?? framsidan.
const closeLightBox = () => {
  let imageMain = document.querySelector("#main-img");
  imageMain.classList.remove("pause");
  document.querySelector("#lightbox-wrapper").style.display = "none";
}


// Ladda ikon dyker upp och rensar form f??lten efter 3 sek
// Kollar med en REGEX att epost har r??tt format, och om allt st??mmer, k??rs fake laddningen
const onSubmit = () => {
    const name = document.forms["contact-form-name"]['input2'].value;
    // Unused --- const formcheck = document.querySelectorAll(".formcheck");
        document.querySelector("#loading-container").style.display = "flex"
    setTimeout(() => {
        document.querySelector("#contact-form").reset();
        document.querySelector("#loading-container")
        .innerHTML = `<h2>Tack ${name}, f??r ditt bidrag!</h2><br><a href="javascript:closeLoadingBox();">[St??ng denna rutan]</a>`
    } , 3000 );
}

//St??nger loading
const closeLoadingBox = () => {
    document.querySelector("#loading-container").style.display = "none"
    document.querySelector("#loading-container").innerHTML = '<div class="loading"></div>'
}

//Genererar sevicecardsfunktionen p?? framsidan.
const serviceCardElements = services.
    map((services) =>
        `<div class="service-boxes"
        style="background:url(./media/img/darkgrey.png),url(./media/img/${services.image})">
        <h2>${services.topic}</h2>
        <p class="service-p">${services.summary}</p>
        </div>`
    ).join("");

document.querySelector('#service-container').innerHTML = serviceCardElements;

// L??gger till staff p?? framsidan.
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

//N??r du ??ppnar ett kort, s?? skapar denna kortet, och h??mtar information fr??n staffarrayen.
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

//st??nger modalen.
const closeModal = () => {
    document.querySelector("#card-modal-wrapper").style.display = "none";
}

// Funktion som ger felmeddelande om epost ej st??mmer. Se funktion validateEmailPattern.
const validateEmail = () => {
    const test = document.forms["contact-form-name"]['input1'].value;
    if (!validateEmailPattern(test)) {
        alert('Du har inte fyllt i en giltig epost-adress!');
        return false;
    }else{
        console.log("korrekt ifylld epost-adress");
        return true;
    }
}

//funktion f??r att kontrollera att eposten anv??nder r??tt syntax
const validateEmailPattern = (emailVariabel) => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailVariabel);
}

//V??ntar p?? att hela sidan har laddats, sen k??rs dessa funktioner.
window.onload = (event) => {
    console.log('page is fully loaded');
    setInterval(imageElems, 2000);
};

//
window.addEventListener("load", () => {
  document.querySelector("#main-img").setAttribute("src", `./media/img/resize/${images[0].filename}`);
  document.querySelector("#main-img").setAttribute("alt", `${images[0].alt}`);
  document.querySelector("#main-img").setAttribute("onclick", `openLightbox('${images[0].filename}')`);
  document.querySelector("#thumbnails-wrapper").innerHTML = imageThumbs;
});
