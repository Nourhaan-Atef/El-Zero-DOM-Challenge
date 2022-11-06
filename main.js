// NAVBAR
let navbar = document.createElement("div");
let logo = document.createElement("h3");
let links = document.createElement("div");
let home = document.createElement("p");
let about = document.createElement("p");
let services = document.createElement("p");
let contact = document.createElement("p");

// CONTENT
let content = document.createElement("div");
content.setAttribute("class", "content");
for (let i = 0; i < 15; i++) {
  let productContent = document.createElement("div");
  let productHeading = document.createElement("h3");
  let productDesc = document.createElement("p");

  //   Content Style
  content.style.background = "#ececec";
  content.style.display = "flex";
  content.style.flexWrap = "wrap";
  content.style.justifyContent = "space-between";
  content.style.alignItems = "center";
  content.style.padding = "5px 0";

  //   ProductContent Style

  productContent.style.display = "flex";
  productContent.style.justifyContent = "space-between";
  productContent.style.alignItems = "center";
  productContent.style.flexDirection = "column";
  productContent.setAttribute("class", "productContent");
  productContent.style.background = "#fff";
  productContent.style.padding = "21px 215px";
  productContent.style.margin = "10px";

  //    productHeading and productDesc Style
  productHeading.style.margin = "0";
  productHeading.style.fontFamily = "cursive";
  productHeading.style.fontSize = "30px";

  productDesc.style.margin = "0";
  productDesc.style.fontFamily = "cursive";
  productDesc.style.fontSize = "13px";
  productDesc.style.color="#878eab"

  productHeading.innerHTML = i + 1;
  productDesc.innerHTML = "product";
  productContent.appendChild(productHeading);
  productContent.appendChild(productDesc);
  content.appendChild(productContent);
}

// FOOTER
let footer = document.createElement("div");
let footerText = document.createElement("p");

//"#ececec"
// Add Content to each element
// Logo
logo.innerHTML = "NOURY";
navbar.setAttribute("class", "navbar");
navbar.appendChild(logo);

// Links
home.innerHTML = "Home";
about.innerHTML = "About";
services.innerHTML = "Services";
contact.innerHTML = "Contact";
links.appendChild(home);
links.appendChild(about);
links.appendChild(services);
links.appendChild(contact);

// Styling Navbar
logo.style.color = "#23a96e";
logo.style.fontFamily = "cursive";
home.style.padding = "0 5px";
about.style.padding = "0 5px";
services.style.padding = "0 5px";
contact.style.padding = "0 5px";
links.style.display = "flex";
links.style.padding = "5px";
links.style.fontFamily = "cursive";
links.style.color = "#878eab";

navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";

// Content

// Footer
footerText.innerHTML = "copyrights 2022";
footerText.style.textAlign = "center";
footerText.style.color = "#fff";
footer.setAttribute("class", "footer");
footer.style.background = "#23a96e";
footer.style.padding = "5px";
footer.appendChild(footerText);

// Adding Elements To The Body
navbar.appendChild(links);

document.body.appendChild(navbar);
document.body.appendChild(content);
document.body.appendChild(footer);
