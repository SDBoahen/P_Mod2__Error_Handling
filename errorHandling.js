// console.log(":)")



//// "block"

// if (true) console.log("Hey!")
// else {
//     console.log()
// }




// try {

//     // woobly;
//     // throw new ReferenceError()

//     let num = 7
//     num.slice(0,5)
//     throw new TypeError()

// } catch (error){
//     console.log(error)
// }






function getProductDescription(product) {
    if (!product.name || !product.priceInCents) {
      throw "Product requires a name and price.";
    }
  
    const priceInDollars = (product.priceInCents / 100).toFixed(2);
    return `${product.name} - $${priceInDollars}`;
  }
  
//   console.log( getProductDescription({ name: "Shirt", priceInCents: 2499 }) ); //> "Shirt - $24.99"
//   console.log( getProductDescription({ name: "Shirt" }) ); //> Uncaught 'Product requires a name and price.'
//   console.log( getProductDescription() ); //> Uncaught TypeError: Cannot read property 'name' of undefined


const stapler = { name: "Stapler", price: 100 }


try {
    let wrongThing = getProductDescription(stapler)
} catch(error) {
    console.log("Alert!: ", error)
}



const product = { name: "Shirt" };
let result = null;


try {
  result = getProductDescription(product);
} catch (error) {
    console.log("An error occurred!");
  console.log(error); //> Product requires a name and price.
}


// console.log(result);














