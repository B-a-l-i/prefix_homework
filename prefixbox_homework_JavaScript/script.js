//---TASK 1---//
let discontinuedCheck= document.querySelector('.sale')
let products= document.querySelectorAll('.product')
let order= document.querySelector('.order')
let productsArray = Array.from(products);
let offerArray=[];
productsArray.forEach(product => {
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
let priceArray=[];
productsArray.forEach(product => {
    const price = product.querySelector('.product-price');
    priceArray.push(price)
});
let sorted=priceArray.toSorted();
let sortedDesc=sorted.toReversed();
console.log(sorted)
console.log(sortedDesc)
order.addEventListener('change', function() {
    let value=this.value
    switch (value) {
        case "0":
            console.log('nov')
            break;
        case "1":
            console.log('csok')
            break;
        case "2":

            break;
        case "3":

            break;
        default:
            break;
    }
})