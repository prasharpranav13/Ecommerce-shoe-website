//selecting items using javascript file
//we'll select sliderWrapper
//const wrapper = document.querySelector(".sliderWrapper");
//how will we give slider effect
//at beginning wrapper's initial pos on x axis is 0
//hence if we change position on x axis we are gonna see second item and so on..
//how we gonna give that style?

//console.log(wrapper)
// wrapper.style.transform = "translateX(100px)"
//then it'll(slidewrapper) not start from 0 rather 100px
//if we use +ve no. it moves to right side
//if we use -ve no. it moves to left and is somewhere b/w first slide and 2nd slide
//hence -100vw will give second slide -200vw 3rd -300 4th and -400 5th
//wrapper.style.transform = "translateX(-100vw)"
//queryselectorall becoz we've multiple items here
// const menuItems= document.querySelectorAll(".menuItem");
//for each item we'll write an event listener
//it means whenever we click evenlistener is gonna listen and run a function
//we'll give that function
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
//PRODUCT ARRAY
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 121,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 199,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 95,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 99,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 111,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

// let choosenProduct = products[0];
// const currentProductImg = document.querySelector(".productImg");
// const currentProductTitle = document.querySelector(".productTitle");
// const currentProductPrice = document.querySelector(".productPrice");
// const currentProductColors = document.querySelectorAll(".color");//all here as there are multiple colors
// const currentProductSizes = document.querySelectorAll(".size");//above reason

// menuItems.forEach((item, index) => {
//     item.addEventListener("click", () => {
//         //CHANGING SLIDE
//         wrapper.style.transform = `translateX(${-100 * index}vw)`;
//         //we'll smoothen the above transition in slidewrapper class in css

//         //CHANGE THE CHOSEN PRODUCT
//         //when we click on menu item we'll choose a product
//         let choosenProduct = products[index];
//         //index 0 1 2 3 4 5 according to index we are gonna change this item
//         //let's say we choose second item then there should pe price and color etc accordingly for Jordan
//         //but how are we gonna pass those informations to product div
//         //first is using queryselector we're gonna select image title price color etc (above)
//         //CHANGE TEXTS OF CURRENT PRODUCT
//         currentProductTitle.textContent = choosenProduct.title;
//         currentProductPrice.textContent = "$" + choosenProduct.price;
//         currentProductImg.src = choosenProduct.colors[0].img;

//         //we'll change styles for each color 
//         //ASSIGNING NEW COLORS
//         currentProductColors.forEach((color, index) => {
//             color.style.backgroundColor = choosenProduct.colors[index].code;
//         });
//         //these colors aren't functional yet when we click them we don't see shoe with diff color
//         //we're gonna add eventlisteners for each color and according to those color we're gonna 
//         //change the images
//         currentProductColors.forEach((color, index) => {
//             color.addEventListener("click", () => {
//                 currentProductImg.src = choosenProduct.colors[index].img;
//             });
//         });
//         //let's add functionality to buy now (above) button as we click it we scroll down
//         //and able to interact with product and it's details below
//         //add ahref to buy now buttons in slider and in link give id of product (html)
//         //make that transition smooth by making scroll behaviour of html smooth in css
//         //FOR EACH SIZE ->let's add click event
//         currentProductSizes.forEach((size, index) => {
//             size.addEventListener("click", () => {
//to disable the previous black when we click on diff size 42 ->43 then again 44
//                 currentProductSizes.forEach((size) => {
//                     size.style.backgroundColor = "white";
//                     size.style.color = "black";
//                 });
//                 size.style.backgroundColor = "black";
//                 size.style.color = "white";
//             });
//         });

//     });
// });


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

//when we click the buy now button we want to open a model where we'll give name surname address payment etc
//let's go to html

//to open card info and all on clicking buy now
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});
//for close
close.addEventListener("click", () => {
    payment.style.display = "none";
});