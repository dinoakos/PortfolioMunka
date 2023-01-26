
//what I want to render in the products pipeline
function Products() {
    return (
        <div class="bg-gray-700 border-4 border-gray-200 rounded-lg m-2 lg:m-10">
            <img class="rounded-lg" src="img/product.png" alt="product placeholder"></img>
            <div class="p-5">
                <h5 class="flex mb-2 text-2xl font-bold justify-center text-center text-white">Placeholder </h5>
            </div>
        </div>
    )

}

//getting the correct object
let produce = <Products />;
//making an array, the length will determine the maximum number of product on the page
let productsArray = new Array(100);
//filling it with nulls so we can reference it later
function fillNull() {
    for (let i = 0; i < productsArray.length; i++) {

        productsArray[i] = null;
    }
}
fillNull();
//this function adds 5 "new" products to the array which gets rendered
function AllProducts() {
    for (let i = 0; i < 5; i++) {

        productsArray[productsArray.indexOf(null)] = produce;
    }
    return (productsArray);
}
//this is here so the site loads products by default
ReactDOM.render(
    <AllProducts />, document.getElementById("productsPipeline"),
)
//when scrolling and at the buttom of the page this inserts more products
window.onscroll = function () {
    if (window.innerHeight + window.pageYOffset + 5 > document.body.offsetHeight) {

        ReactDOM.render(
            <AllProducts />, document.getElementById("productsPipeline"),
        )

    }
}






















