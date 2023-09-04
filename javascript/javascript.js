class product{

    constructor(name,price,category,image,id){
        this.name =name;
        this.price=price;
        this.category=category;
        this.image=image;
        this.display(id)
    }

   display(id){
    const currentpage =document.body.id;
    if(currentpage==="page1"){

        console.log("index")
    
        const productcontainer=document.createElement("div")
        productcontainer.className='card'
    
        const anchor =document.createElement('a')
        anchor.href=`#`;
    
        const productimg=document.createElement("img")
        productimg.className='card-img-top product-image'
        productimg.src=`${this.image}`
    
        const cardbody=document.createElement("div")
        cardbody.className='card-body'
    
        const productcategory =document.createElement("div")
        productcategory.className="category"
        productcategory.textContent=`${this.category}`
        
        const name =document.createElement("h5")
        name.className='card-title'
        name.textContent=`${this.name}`
    
        const anchorsamepage=document.createElement('a')
        anchorsamepage.href=`#`
        anchorsamepage.className='productname'
        
        const cardtext =document.createElement("p")
        cardtext.className='card-text'
        cardtext.textContent=`£${this.price}.00`
    
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

        const product =document.getElementById(id)
        product.appendChild(col)
    
   }

   else if(currentpage==="page2"){
    console.log("groceries")
    
    const productcontainer=document.createElement("div")
    productcontainer.className='card'

    const anchor =document.createElement('a')
    anchor.href=`#`;

    const productimg=document.createElement("img")
    productimg.className='card-img-top product-image'
    productimg.src=`${this.image}`

    const cardbody=document.createElement("div")
    cardbody.className='card-body'

    const productcategory =document.createElement("div")
    productcategory.className='category'
    productcategory.textContent=`${this.category}`
    
    const name =document.createElement("h5")
    name.className='card-title'
    name.textContent=`${this.name}`

    const anchorsamepage=document.createElement('a')
    anchorsamepage.href=`#`
    anchorsamepage.className='productname'
    
    const cardtext =document.createElement("p")
    cardtext.className='card-text'
    cardtext.textContent=`£${this.price}.00`

    const starimage=document.createElement("img")
    starimage.className="fivestar"
    starimage.src='image/5-Stars-PNG-HD.png'

    const col =document.createElement("div")
    col.className='col-md-3 groceriesproduct'

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
    groceries[0].appendChild(col)


}
}
}



{
    if(document.body.id==="page1"){
        let productlist=[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG","bestselling"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG","bestselling"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG","bestselling"),new product("Natural Extracted Edible Oil",19.00,"Groceries","image/oil.PNG","bestselling")];
        
        let trending =[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG","trending"),new product("Fresh Orange Juice",19.00,"Groceries","image/orangejuice.PNG","trending"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG","trending"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG","trending"),]
        
        productlist.forEach(product => {
            console.log(product)
        });

        trending.forEach(product => {
            console.log(product)
        });
    }
    
    else{
        let groceries =[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG"),new product("Fresh Orange Juice",19.00,"Groceries","image/orangejuice.PNG"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG"),]

        groceries.forEach(product => {
            console.log(product)
        });
    }
  
    
}


