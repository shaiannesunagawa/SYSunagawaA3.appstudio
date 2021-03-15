name = []
let products = ["Crocheted Dog Toy, $10.00", "Slow Feeder Bowl, $14.00", "Pawz Grey Treat Jar, $20.00", "Blue Sweet Dreams Thermal Pajamas, $30.00", "Checker Chewy Vuiton Bowl, #32.00", "Red Heart Sweater Dress, $27.00", "Velvet Hair Bow - Sun Kissed, $12.00", "Into the Wild Leash, $27.00"]
let wishList = []

dogImage.onclick=function(){
  lblMessage.value = "Add items to your wish list below!"
}

btnProductList.onclick=function(){
    lblProductList.value = products
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

btnViewWishList.onclick=function(){
  lblWishList.value = wishList
}
