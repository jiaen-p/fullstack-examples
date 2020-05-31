let total = 0;
let show = false;
function addToCart(id){
    ropa.forEach(r => {
        if(r.id === id){
            total+=r.price;
            r.quantity++
        }
    })
    generate()
}

function showTotal(){
    let t = document.getElementById("total-container");
    if (t.style.display === "block"){
        t.style.display = "none"
    } else {
        t.style.display = "block"
    }
    generate()
}
function generate(){
    let final = ''
    let total = 0
    ropa.forEach(r => {
        if(r.quantity > 0){
            final += `
            <div class="items"> 
                <img src=${r.img} alt="...">
                <p>x${r.quantity} = ${r.getTotal()}€</p>
            </div>
            `
            total += r.getTotal()
        }
    })
    let returnText = `${final}
    <p>Total: ${total}</p>`
    document.getElementById("total-container").innerHTML = returnText
}


function load(){
    let text = '';
    ropa.forEach(r => {
        text += r.getCard()
    })
    document.getElementById("items").innerHTML = text
}
class Ropa{
    
    constructor(img, price, id){
        this.img = img
        this.price = price
        this.id = id
        this.quantity = 0;
    }
    getTotal(){
        return this.price * this.quantity;
    }
    getCard(){
        return(`
            <div class="card col-12 col-md-6 col-lg-4 col-xl-3" style="width: 18rem;">
                <img name="img" src=${this.img} class="card-img-top" alt="...">
                <div class="card-body d-flex">
                        <h5 class="card-title" name="price">${this.price}€</h5>
                        <button onclick=addToCart(${this.id}) type="submit" class="btn btn-seconday border border-dark bg-light"><i class="fas fa-cart-plus"></i></button>        
                </div>
            </div>
        `)
    }
}

let r1 = new Ropa("https://cdn.shopify.com/s/files/1/0046/9372/products/enjoy-thumb2_370x.png?v=1571262411", 10, 1)
let r2 = new Ropa("https://cdn.shopify.com/s/files/1/0046/9372/products/sparklemore-thumb_370x.png?v=1571262414", 15, 2)
let r3 = new Ropa("https://cdn.shopify.com/s/files/1/0046/9372/products/cincinnati-onesie-thumb_370x.png?v=1571262411", 24, 3)
let r4 = new Ropa("https://cdn.shopify.com/s/files/1/0046/9372/products/portafilter-thumb_370x.png?v=1571262412", 20, 4)
let ropa = [r1, r2, r3, r4]
window.addEventListener("load", () => {load()})

