let sel = document.querySelector("#deviceSelect");
let productsDiv = document.querySelector("#products");
let cartCount = document.querySelector("#cartCount");

let cart = 0;

let devices = {
  samsung: [
    { name: "Samsung Galaxy S23", price: 1200, img: "https://via.placeholder.com/200x150?text=Galaxy+S23" },
    { name: "Samsung Galaxy A54", price: 450, img: "https://dummyimage.com/200x150/333/fff&text=Galaxy+A54" }
  ],
  mi: [
    { name: "Xiaomi 13 Pro", price: 800, img: "https://dummyimage.com/200x150/555/fff&text=Mi+13+Pro" },
    { name: "Redmi Note 12", price: 300, img: "https://dummyimage.com/200x150/777/fff&text=Redmi+Note+12" }
  ],
  apple: [
    { name: "iPhone 14 Pro Max", price: 1300, img: "https://dummyimage.com/200x150/999/fff&text=iPhone+14+Pro+Max" },
    { name: "iPhone SE (2022)", price: 450, img: "https://dummyimage.com/200x150/222/fff&text=iPhone+SE" }
  ]
};

sel.addEventListener("change", function (evt) {
  let brand = evt.target.value.toLowerCase(); // convert to lowercase
  let productList = devices[brand];

  productsDiv.innerHTML = ""; // clear old products

  productList.forEach(p => {
    let card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p><strong>$${p.price}</strong></p>
      <button class="btn">Add to Cart</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      cart++;
      cartCount.textContent = cart;
      cartCount.style.transform = "scale(1.5)";
      setTimeout(() => (cartCount.style.transform = "scale(1)"), 200);
    });
    productsDiv.appendChild(card);
  });
});

