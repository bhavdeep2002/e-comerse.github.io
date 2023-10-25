class Product {
    constructor(name, category, price, images) {

        this.name = name
        this.category = category
        this.price = price
        this.images = images
    }
}

class Cart {
    constructor() {
        this.item = []
    }
    additem(product, quantity) {
        this.item.push({ product: product, quantity: quantity })
    }
}

// Fetch products from API and create Product class objects

if (navigator.onLine) {
    fetch('https://dummyjson.com/products')
        .then(res => {
            if (!res.ok) {
                throw new Error("Error in Response " + res.status)
            }
            else {
                return res.json()
            }
        })
        .then(json => {
            const product = json.products.map(productData => {
                return new Product(productData.title, productData.category, productData.price, productData.images)
            })
            let filter
            const filtered = ()=>{
                console.log("called")
                const lowerrange =document.getElementsByClassName("filter-range")[0].value
                const upperrange =document.getElementsByClassName("filter-range")[1].value
               
                const filteredproduct =product.filter(p =>{
                    if(p.price>=lowerrange && p.price<=upperrange){
                        return p
                    }
                })
                product.forEach((id)=>{
                    id.style.display="none"
                })
                filteredproduct.forEach((id)=>{
                    id.style.display="flex"
                })
            }
            // filter=filteredproduct
                              
            const aplyfilter=document.getElementById("filter-button")
            aplyfilter.onclick=filtered;

            const div = product.map(object => {
                return ` 
            <div class="card">
              <a href="#">
                <img class="card-img-top product-image" src=${object.images[0]}>
              </a>
              <div class="card-body">
                <div class="category">${object.category}</div>
                <a href="#" class="productname">
                  <h5 class="card-title">${object.name}</h5>
                </a>
                <p class="card-text">${object.price}</p>
                <img class="fivestar" src="image/5-Stars-PNG-HD.png">
              </div>
            </div>
          `;
            })

            div.forEach(filter => {
                const row = document.getElementById("my-row")
                const card = document.createElement("div")
                card.className = 'col-md-3'
                card.innerHTML = filter
                row.appendChild(card)
            });
        })

        .catch(
            (err) => {
                console.error("Error : " + err)
            }
        )
}
else {
    console.log("Your are offline")
}

