let cart = []

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct) => {
    const existProduct = cart.find(item => item._id === newProduct._id);
    if(!existProduct){
        cart.push(newProduct)
    } else{
        existProduct.quantity += newProduct.quantity;
        existProduct.total += newProduct.total
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const decreaseQuantity = (id, quantityProduct) => {
    const currentProduct = cart.find(item => item.id == id)
    currentProduct.quantity = quantityProduct

    if(currentProduct.quantity <1){
        if(window.confirm("Ban muon xoa sp khong?")){
            cart = cart.filter(item => item.id != id)
        } else {
            currentProduct.quantity = 1
        }
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const increaseQuantity = (id) => {
    cart.find(item => item.id === id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeItemCart = (id) => {
    if(window.confirm("Ban muon xoa sp khong?")){
        cart = cart.filter(item => item.id != id)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}