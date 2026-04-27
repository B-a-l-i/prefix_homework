//---TASK 1---//
let discontinuedCheck= document.querySelector('.sale')
let product= document.querySelectorAll('.product')
let order= document.querySelector('.order')
let productArray = Array.from(product);
let offerArray=[];
productArray.forEach(product => {
    const oldPrice = product.querySelector('.product-old-price');

    if (!oldPrice) {
        offerArray.push(product)
    }
});

discontinuedCheck.addEventListener('change', function() {
if (discontinuedCheck.checked) 
{
    offerArray.forEach(offer => {
        offer.classList.add('hidden')
    });
} 
else 
{
    offerArray.forEach(offer => {
        offer.classList.remove('hidden')
    });
}
})

//---TASK 2---//
let productsContainer=document.querySelector('.products')
function getPrice(product){
    const priceText = product.querySelector('.product-price').innerText

    return Number(priceText.replace('Ft','').replace(/\./g,'').trim())
}

function getName(product){
    return product.querySelector('.product-name').innerText.toLowerCase()
}

order.addEventListener('change', function() {
    let products = Array.from(
        document.querySelectorAll('.product')
    )
    switch (this.value) {
        //Ár szerint csökkenő
        case "0":
            products.sort((a,b) =>
                getPrice(a) - getPrice(b)
            )
            break;
        //Ár szerint növekvő
        case "1":
            products.sort((a,b) =>
                getPrice(b) - getPrice(a)
            )
            break;
        //ABC növekvő
        case "2":
            products.sort((a,b) =>
                getName(a).localeCompare(getName(b))
            )
            break;
        //ABC csökkenő
        case "3":
            products.sort((a,b) =>
                getName(b).localeCompare(getName(a))
            )
            break;
        default:
            break;
    }
    products.forEach(product =>{
        productsContainer.appendChild(product)
    })
})