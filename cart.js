const product =[
    {
        id: 1,
        image: '1.jpg',
        title: 'Cheese Pizza',
        price: 199,
    },
    {
        id: 2,
        image: '2.jpg',
        title: 'Bruger',
        price: 59,
    },
    {
        id: 3,
        image: '3.jpg',
        title: 'Cold Coffee',
        price: 79,
    },
    {
        id: 4,
        image: '4.jpg',
        title: 'Chowmein',
        price: 79,
    },
    {
        id: 5,
        image: '5.jpg',
        title: 'Dosa',
        price: 199,
    },
    {
        id: 6,
        image: '6.jpg',
        title: 'French Fries',
        price: 79,
    },
    {
        id: 7,
        image: '7.jpg',
        title: 'Idli',
        price: 69,
    },
    {
        id: 8,
        image: '8.jpg',
        title: 'Veg Roll',
        price: 59,
    },
    {
        id: 9,
        image: '9.jpg',
        title: 'Pastry',
        price: 49,
    },
    {
        id: 10,
        image: '10.jpg',
        title: 'Tea',
        price: 20,
    },
    {
        id: 11,
        image: '11.jpg',
        title: 'Coffee',
        price: 30,
    },
    {
        id: 12,
        image: '12.jpg',
        title: 'Chowmein',
        price: 60,
    },

    {
        id: 13,
        image: '13.jpg',
        title: 'Jalebi',
        price: 40,
    },
    {
        id: 14,
        image: '14.jpg',
        title: 'Momos',
        price: 50,
    },
    {
        id: 15,
        image: '15.jpg',
        title: 'Manchurian',
        price: 70,
    },
   

]; 
const categories= [...new Set(product.map((item) =>
    {return item}
))]
let i=0;
document.getElementById('root').innerHTML= categories.map((item)=>
{
    var{image, title, price}= item;
    return (
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'> Add to cart</button>" + `</div>
        </div>`
        
    )
}).join('')

var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(){
    let j=0, total=0;
    document.getElementById("count").innerHTML= cart.length;
   
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML= "Rs."+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML= cart.map((items)=>
          {
            var{image, title, price}=items;
            total= total+price;
            document.getElementById("total").innerHTML="Rs."    +total+".00";
        return(`<div class='cart-item'>
        <div class='row-img'>
          <img class='rowimg' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size: 15px;'> ${price}.00</h2>` +
          " <button class='del' onclick='delElement("+ (j++) +")'> <img src='delete.png'> </button> </div>"
          );          }
        ).join('');
    }
}

onclick='delElement("+ (j++) +")'

