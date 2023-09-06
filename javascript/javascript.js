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

 
const searchproduct =()=>{
    let input =document.getElementById("in").value.trim()
    let card =document.getElementsByClassName("card")
    let cardname =document.getElementsByClassName("card-title")

    for (let i = 0; i < card.length; i++) {
        if(cardname[i].textContent.toUpperCase().trim()===input){
            let temp;
            temp =card[i].innerHTML
            card[i].innerHTML=card[0].innerHTML
            card[0].innerHTML=temp
             
        }
        
    }
}

const search=() =>{// no 2: for filtering the search as typing
    listbar()
    let input =document.getElementById("in").value.toUpperCase()
    let list =document.querySelectorAll(".list")

   for (let i = 0; i < list.length; i++) {
         let li =list[i].textContent.toUpperCase().trim()// li contains textcontent of list[i]
        
         if(li.indexOf(input)>-1)
        {   
            let stringcolored =""
            let colored =li.indexOf(input)
          for(let i=0;i<li.length;i++){
            if(li[i]===li[colored]){
                stringcolored+="<span class='char'>" +li[colored] +'</span>'
            }
            else{
                stringcolored+=li[i];
            }

          }

          if(input===""){
            list[i].innerHTML=list[i].innerHTML
          }
          else{
            list[i].innerHTML=stringcolored
          }

            list[i].style.display='';
        }
        else{
            list[i].style.display="none";
        }
    
   }

    }

    {//no 4: for clicking a list element and adding their innerText in input
    
    let input= document.getElementById("in")
    let list= document.querySelectorAll(".list")
    let ul =document.getElementById("my-ul")

    list.forEach(name => {
      
     name.addEventListener('click',inser=()=>{
         input.value=name.innerText
         ul.style.display="none"
     })
    });
}


    const listbar =()=>{// no 1: for showing list
        let input =document.getElementById("in").value.trim()
        if(input===""){
            document.getElementById("my-ul").style.display="none"
        }

        else{
            document.getElementById("my-ul").style.display="block"
        }
        
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

        groceries.push(new product("Cashew Butter",19.00,"Groceries","image/casheo.PNG","groceries"),new product("Diabetic Cookies",25.00,"Groceries","image/cookies.PNG","groceries"),new product("Fresh Organic Honey",34.00,"Groceries","image/honey.PNG","groceries"),new product("Organic Face Scrub",35.00,"Groceries","image/facescrub.PNG","groceries"),new product("Pulses From Organic Farm",15.00,"Groceries","image/dal.PNG" ,"groceries"),new product("Natural Extracted Edible Oil",19.00,"Groceries","image/oil.PNG","bestselling"))

        groceries.forEach(product => {
            console.log(product)
        });
    }
  
    
}


