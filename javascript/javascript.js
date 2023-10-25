class product{

    constructor(name, category, price, brand, images) {
        this.name = name
        this.category = category
        this.price = price
        this.brand = brand
        this.images = images
      
          
           this.display()
    }

//    displayindex(id){
    
//         const productcontainer=document.createElement("div")
//         productcontainer.className='card'
    
//         const anchor =document.createElement('a')
//         anchor.href=`#`;
    
//         const productimg=document.createElement("img")
//         productimg.className='card-img-top product-image'
//         productimg.src=`${this.image}`
    
//         const cardbody=document.createElement("div")
//         cardbody.className='card-body'
    
//         const productcategory =document.createElement("div")
//         productcategory.className="category"
//         productcategory.textContent=`${this.category}`
        
//         const name =document.createElement("h5")
//         name.className='card-title'
//         name.textContent=`${this.name}`
    
//         const anchorsamepage=document.createElement('a')
//         anchorsamepage.href=`#`
//         anchorsamepage.className='productname'
        
//         const cardtext =document.createElement("p")
//         cardtext.className='card-text'
//         cardtext.textContent=`£${this.price}.00`
    
//         const starimage=document.createElement("img")
//         starimage.className="fivestar"
//         starimage.src='image/5-Stars-PNG-HD.png'
    
//         const col =document.createElement("div")
//         col.className="col-md-3 groceries"
    
//         cardbody.appendChild(productcategory)
//         anchorsamepage.appendChild(name)
//         cardbody.appendChild(anchorsamepage)
//         cardbody.appendChild(cardtext)
//         cardbody.appendChild(starimage)
//         anchor.appendChild(productimg)
    
//         productcontainer.appendChild(anchor)
//         productcontainer.appendChild(cardbody)
//         col.appendChild(productcontainer)

//         const product =document.getElementById(id)
//         product.appendChild(col)
    
//    }

   display() {

    const productcontainer = document.createElement("div")
    productcontainer.className = 'card'

    const anchor = document.createElement('a')
    anchor.href = `#`;

    const productimg = document.createElement("img")
    productimg.className = 'card-img-top product-image'
    productimg.src = `${this.images[0]}`

    const cardbody = document.createElement("div")
    cardbody.className = 'card-body'

    const productcategory = document.createElement("div")
    productcategory.className = "category"
    productcategory.textContent = `${this.category}`

    const name = document.createElement("h5")
    name.className = 'card-title'
    name.textContent = `${this.name}`

    const anchorsamepage = document.createElement('a')
    anchorsamepage.href = `#`
    anchorsamepage.className = 'productname'

    const cardtext = document.createElement("p")
    cardtext.className = 'card-text'
    cardtext.textContent = `£${this.price}.00`

    const starimage = document.createElement("img")
    starimage.className = "fivestar"
    starimage.src = 'image/5-Stars-PNG-HD.png'

    const col = document.createElement("div")
    col.className = "col-md-4 groceries"

    cardbody.appendChild(productcategory)
    anchorsamepage.appendChild(name)
    cardbody.appendChild(anchorsamepage)
    cardbody.appendChild(cardtext)
    cardbody.appendChild(starimage)
    anchor.appendChild(productimg)

    productcontainer.appendChild(anchor)
    productcontainer.appendChild(cardbody)
    col.appendChild(productcontainer)

    const product = document.getElementById("groceries")
    product.appendChild(col)

}
}

class Fil{
    constructor(lowerlimit,upperlimit,colum){
        
        let groceries =document.getElementById("groceries")
        const prices =document.querySelectorAll(".card-text")//<p>£19.00</p>
        const price=[]// empty array used to store 19.00 type of values

        this.lowerlimit=lowerlimit
        this.upperlimit=upperlimit
        this.colum=colum
       

            for (let i = 0,j=0; i <prices.length; i++,j++) {

            let p1 =parseInt(prices[i].textContent.replace("£",""))

            price[j]=p1;
            
        }
       let count=0;// for counting how many displays has turned none

        for(let i=0;i<price.length;i++){// displays flitered price product

            if(price[i]>=this.lowerlimit && price[i]<=this.upperlimit){
                this.colum[i].style.display="flex"
            }
            else{
                this.colum[i].style.display="none"
                count++;
            }
        }

        if(count===this.colum.length){// if no search found (all products display become none)
            console.log(count)
            document.getElementsByClassName("notfound")[0].style.display="block"

        }
        else{// if not all product display become none means some products are visible for that we should not display notfound message
            document.getElementsByClassName("notfound")[0].style.display="none"
        }
 
    }
}

{// dynamically creating the products as object

    if(document.body.id==="page1"){// this js is for page1 index.html
        let productlist=[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG","bestselling"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG","bestselling"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG","bestselling"),new product("Natural Extracted Edible Oil",19.00,"Groceries","image/oil.PNG","bestselling")];
        
        let trending =[new product("Assorted Coffee",19.00,"Groceries","image/coffee.PNG","trending"),new product("Fresh Orange Juice",19.00,"Groceries","image/orangejuice.PNG","trending"),new product("Hand Sanitizer",19.00,"Groceries","image/handsanatizer.PNG","trending"),new product("Handpicked Red Chillies",19.00,"Groceries","image/redchilli.PNG","trending")]
        
        productlist.forEach(product => {
            console.log(product)
        });

        trending.forEach(product => {
            console.log(product)
        });
    }
    
    else if(document.body.id==="page2") {// this page2 is for groceries.html
        if (navigator.onLine) {
            fetch('https://dummyjson.com/products')

                .then(res => {
                    if (!res.ok) {
                        throw new Error('Response Error: ' + res.status);
                    }
                    else {
                        return res.json()
                    }
                })
                .then(json => {

                    json.products.forEach(prod => {
                        new product(prod.title, prod.category, prod.price, prod.brand, prod.images)

                    });

                })

                .catch(error => {
                    console.error('Error' + error)
                })

        }
        else {
            console.error("No Internet")
        }

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

const search=() =>{// no 1:

    listbar()// no 2 the product search list is displayed 
    
    //filter's the list as typed

    let input =document.getElementById("in").value.toUpperCase()// a --> A trim removes extra space after a
    let list =document.querySelectorAll(".list")

   for (let i = 0; i < list.length; i++) {
    //list[i]--> <li>..</li> and list[i].toUpperCase().trim() ---> ASSORTED COFFEE without any space

         let li =list[i].textContent.toUpperCase().trim()// li contains textcontent of list[i]
        
         if(li.indexOf(input)>-1)// for checking the li contains input or not (ex :- li= "ASSORTED COFFEE" ) input ="a"
         // li.indexOf(input)---> 0 
        {   
            let stringcolored =""// empty string used for identifying and showing matched charactor in blue color 
            let colored =li.indexOf(input)// this returns index of matched character

          for(let i=0;i<li.length;i++){// here we are triversing string which is inside li

            if(i===colored){//
                stringcolored+="<span class='char'>" +li[colored] +'</span>'//string containing colored characters
            }
            else{
                stringcolored+=li[i];// assorted --> a index is 0 colored index is 0  (0===0) and for i=1,2,... other than matched index this line is executed
            }

          }
           // stringcolored is ready then we do

          if(input===""){// if input is empty then no change
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

    {//no 3: for clicking a list element and adding their innerText in input
    
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


    const listbar =()=>{// no 2: for showing list

        let input =document.getElementById("in").value.trim()
        if(input===""){
            document.getElementById("my-ul").style.display="none"
        }

        else{
            document.getElementById("my-ul").style.display="block"
        }
             
    }

  

   let colum =document.querySelectorAll(".col-md-4")

const filter=()=>{
    
    let lowerlimit =document.getElementsByClassName("filter-range")[0].value
    let upperlimit =document.getElementsByClassName("filter-range")[1].value
    let ob=new Fil(lowerlimit,upperlimit,colum)
}
