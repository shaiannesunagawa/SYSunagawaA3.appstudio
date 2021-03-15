name = []
let products = ["Crocheted Dog Toy", "Slow Feeder Bowl", "Pawz Grey Treat Jar", "Blue Sweet Dreams Thermal Pajamas", "Checker Chewy Vuiton Bowl", "Red Heart Sweater Dress", "Velvet Hair Bow - Sun Kissed", "Into the Wild Leash"]
let productPrice = ["$10.00", "$14.00", "$20.00", "$30.00", "$32.00", "$27.00", "$12.00", "$27.00"]
let wishList = []

btnProductList.onclick=function(){
    lblProductList.value = products
    lblPriceList.value = productPrice
}

btnViewWishList.onclick = function(){
  lblWishList.value = wishList
}

btnAddItem.onclick=function(){
   let userProduct = inptProduct.value
  i = products.includes(userProduct)
  if (i == true){
    wishList.push(userProduct)
    lblWishList.value = `${userProduct} has been added to your wish list.`
  }
  if (i == false)
    lblWishList.value = `We can't find ${userProduct} in the product list.`
}

