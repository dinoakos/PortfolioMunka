
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


console.log(<Products />);
let produce = <Products />;
console.log(produce);


let productsArray = new Array(100);
function fillNull(){
    for(let i = 0;i<productsArray.length;i++){
        
        productsArray[i]=null;
    }
}
fillNull();
function AllProducts(){
    for(let i = 0;i<5;i++){
        console.log(productsArray.indexOf(null));
        productsArray[productsArray.indexOf(null)]=produce;
    }
    return(productsArray);
}
ReactDOM.render(
    <AllProducts />,document.getElementById("productsPipeline"),
)

window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset+5 > document.body.offsetHeight) {
        console.log("click");
        ReactDOM.render(
            <AllProducts />,document.getElementById("productsPipeline"),
        )
        
    }
   }






















