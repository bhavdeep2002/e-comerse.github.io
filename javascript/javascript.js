class product{

    constructor(name,price,category,image){
        this.name =name;
        this.price=price;
        this.category=category;
        this.image=image;
    }
}

const currentpath =window.location.pathname;
console.log(currentpath)
if(currentpath=== "/C:/Users/Acer/Desktop/PROJECT/e%20commerse/index.html"){
    console.log("index")
    let productlist=[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG"),new product("Natural Extracted Edible Oil",19.00,"Groceries","image/oil.PNG" )];

productlist.forEach((product )=> {
    const productcontainer=document.createElement("div")
    productcontainer.className='card'

    const anchor =document.createElement('a')
    anchor.href=`#`;

    const productimg=document.createElement("img")
    productimg.className='card-img-top product-image'
    productimg.src=`${product.image}`

    const cardbody=document.createElement("div")
    cardbody.className='card-body'

    const productcategory =document.createElement("div")
    productcategory.className="category"
    productcategory.textContent=`${product.category}`
    
    const name =document.createElement("h5")
    name.className='card-title'
    name.textContent=`${product.name}`

    const anchorsamepage=document.createElement('a')
    anchorsamepage.href=`#`
    anchorsamepage.className='productname'
    
    const cardtext =document.createElement("p")
    cardtext.className='card-text'
    cardtext.textContent=`£${product.price}.00`

    const starimage=document.createElement("img")
    starimage.className="fivestar"
    starimage.src='image/5-Stars-PNG-HD.png'

    const col =document.createElement("div")
    col.className='col-md-3'

    cardbody.appendChild(productcategory)
    anchorsamepage.appendChild(name)
    cardbody.appendChild(anchorsamepage)
    cardbody.appendChild(cardtext)
    cardbody.appendChild(starimage)
    anchor.appendChild(productimg)

    productcontainer.appendChild(anchor)
    productcontainer.appendChild(cardbody)
    col.appendChild(productcontainer)

    const bestsellingproduct =document.getElementById("bestsellingproduct")
    bestsellingproduct.appendChild(col)

    // const Groceries =document.getElementById("groceries")
    // Groceries.appendChild(col)

    
})

let trendingproduct =[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG"),new product("Fresh Orange Juice",19.00,"Groceries","image/orangejuice.PNG"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG"), ]

trendingproduct.forEach((product)=> {
    const productcontainer=document.createElement("div")
    productcontainer.className='card'

    const anchor =document.createElement('a')
    anchor.href=`#`;

    const productimg=document.createElement("img")
    productimg.className='card-img-top product-image'
    productimg.src=`${product.image}`

    const cardbody=document.createElement("div")
    cardbody.className='card-body'

    const productcategory =document.createElement("div")
    productcategory.className='category'
    productcategory.textContent=`${product.category}`
    
    const name =document.createElement("h5")
    name.className='card-title'
    name.textContent=`${product.name}`

    const anchorsamepage=document.createElement('a')
    anchorsamepage.href=`#`
    anchorsamepage.className='productname'
    
    const cardtext =document.createElement("p")
    cardtext.className='card-text'
    cardtext.textContent=`£${product.price}.00`

    const starimage=document.createElement("img")
    starimage.className="fivestar"
    starimage.src='image/5-Stars-PNG-HD.png'

    const col =document.createElement("div")
    col.className='col-md-3'

    cardbody.appendChild(productcategory)
    anchorsamepage.appendChild(name)
    cardbody.appendChild(anchorsamepage)
    cardbody.appendChild(cardtext)
    cardbody.appendChild(starimage)
    anchor.appendChild(productimg)

    productcontainer.appendChild(anchor)
    productcontainer.appendChild(cardbody)
    col.appendChild(productcontainer)

    const trendingproduct =document.getElementById("trendproduct")
    trendingproduct.appendChild(col)
})

}

else if(currentpath==="/C:/Users/Acer/Desktop/PROJECT/e%20commerse/groceries.html"){
    console.log("groceries")
    let groceries =[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG"),new product("Fresh Orange Juice",19.00,"Groceries","image/orangejuice.PNG"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG"),]

groceries.forEach((product)=> {
    const productcontainer=document.createElement("div")
    productcontainer.className='card'

    const anchor =document.createElement('a')
    anchor.href=`#`;

    const productimg=document.createElement("img")
    productimg.className='card-img-top product-image'
    productimg.src=`${product.image}`

    const cardbody=document.createElement("div")
    cardbody.className='card-body'

    const productcategory =document.createElement("div")
    productcategory.className='category'
    productcategory.textContent=`${product.category}`
    
    const name =document.createElement("h5")
    name.className='card-title'
    name.textContent=`${product.name}`

    const anchorsamepage=document.createElement('a')
    anchorsamepage.href=`#`
    anchorsamepage.className='productname'
    
    const cardtext =document.createElement("p")
    cardtext.className='card-text'
    cardtext.textContent=`£${product.price}.00`

    const starimage=document.createElement("img")
    starimage.className="fivestar"
    starimage.src='image/5-Stars-PNG-HD.png'

    const col =document.createElement("div")
    col.className='col-md-3'

    cardbody.appendChild(productcategory)
    anchorsamepage.appendChild(name)
    cardbody.appendChild(anchorsamepage)
    cardbody.appendChild(cardtext)
    cardbody.appendChild(starimage)
    anchor.appendChild(productimg)

    productcontainer.appendChild(anchor)
    productcontainer.appendChild(cardbody)
    col.appendChild(productcontainer)

    const groceries =document.getElementById("groceries")
    groceries.appendChild(col)
})
}