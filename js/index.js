const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//for Header
let dataArr = ["Product", "Vision", "Features", "About", "Contact"];
let anchor = document.querySelectorAll("Nav a");

Array.from(anchor);

for (var i = 0; i < anchor.length - 1; i++) {
  anchor[i].textContent = dataArr[i];
}

let picture1 = document.querySelector("#cta-img");
picture1.src = "img/header-img.png";

let text1 = document.querySelector(".cta-text h1");
text1.textContent = "DOM \n IS  AWESOME";

let text2 = document.querySelector(".cta-text button");
text2.textContent = "Get Started";

let picture2 = document.querySelector(".middle-img");
picture2.src = "img/mid-page-accent.jpg";

let h4Arr = ["FEATURES", "ABOUT", "SERVICES", "PRODUCT", "VISION", "CONTACT"];

let hFour = document.querySelectorAll("h4");

Array.from(hFour);

for (var i = 0; i < hFour.length; i++) {
  hFour[i].textContent = h4Arr[i];
}

// Example: Update the img src for the logo
let content1 = document.querySelectorAll("p");

Array.from(content1);

let pArray = [
  siteContent["main-content"]["features-content"],
  siteContent["main-content"]["about-content"],
  siteContent["main-content"]["services-content"],
  siteContent["main-content"]["product-content"],
  siteContent["main-content"]["vision-content"],
  // siteContent["main-content"]["product-content"],
  siteContent["contact"]["address"],
  siteContent["contact"]["phone"],
  siteContent["contact"]["email"],
  siteContent["footer"]["copyright"],
];

for (var i = 0; i < content1.length; i++) {
  content1[i].textContent = pArray[i];
}
