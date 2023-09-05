class product{

    constructor(name,price,category,image,id){
        this.name =name;
        this.price=price;
        this.category=category;
        this.image=image;
        if(id==="trending" || id ==="bestselling"){
            this.displayindex(id)
        }
        else{
           this.displaygroceries(id)
    }
    }

   displayindex(id){
    
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
        col.className="col-md-3 groceries"
    
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

   displaygroceries(id){
    
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
    col.className="col-md-4 groceries"

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

sort(){
    
}
}

 const search=() =>{
    let input =document.getElementById("in").value.toUpperCase()
    let list =document.querySelectorAll(".list")
    
   for (let i = 0; i < list.length; i++) {
         
        if(list[i].innerHTML.toUpperCase().trim().includes(input)){
            list[i].style.display='';
        }
        else{
            list[i].style.display="none";
        }
    
   }

    }

    const listbar=()=>{
        console.log("list")
        let list =document.getElementById("my-ul")
        list.style.display="block"

    }


{
    if(document.body.id==="page1"){
        let productlist=[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG","bestselling"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG","bestselling"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG","bestselling"),new product("Natural Extracted Edible Oil",19.00,"Groceries","image/oil.PNG","bestselling")];
        
        let trending =[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG","trending"),new product("Fresh Orange Juice",19.00,"Groceries","image/orangejuice.PNG","trending"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG","trending"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG","trending")]
        
        productlist.forEach(product => {
            console.log(product)
        });

        trending.forEach(product => {
            console.log(product)
        });
    }
    
    else{
        let groceries =[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG","groceries"),new product("Fresh Orange Juice",19.00,"Groceries","image/orangejuice.PNG","groceries"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG","groceries")]

        groceries.push(new product("Cashew Butter",19.00,"Groceries","image/casheo.PNG","groceries"),new product("Diabetic Cookies",25.00,"Groceries","image/cookies.PNG","groceries"),new product("Fresh Organic Honey",34.00,"Groceries","image/honey.PNG","groceries"))

        groceries.forEach(product => {
            console.log(product)
        });
    }
  
    
}


