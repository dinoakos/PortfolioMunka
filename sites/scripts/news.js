
function News() {
    return (
        <div id="news" class="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-[50%_50%] ">
            <div>
                <div class="font-bold text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis tempus erat,
                    nec
                    viverra orci facilisis a. Morbi nisi odio, venenatis nec dolor at, euismod scelerisque
                    felis. Ut aliquam tortor lectus, eget .
                </div>
            </div>
            <div>
                <img class="hidden lg:block" src="img/newspaper.png" alt="newspaper"></img>
            </div>
        </div>
    )
    
}
console.log(<News />);
let hir = <News />;
console.log(hir);


let newsArray = new Array(100);
function fillNull(){
    for(let i = 0;i<newsArray.length;i++){
        
        newsArray[i]=null;
    }
}
fillNull();
function AllNews(){
    for(let i = 0;i<5;i++){
        console.log(newsArray.indexOf(null));
        newsArray[newsArray.indexOf(null)]=hir;
    }
    
    return(newsArray);
}
ReactDOM.render(
    <AllNews />,document.getElementById("newsPipeline"),
)

window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        ReactDOM.render(
            <AllNews />,document.getElementById("newsPipeline"),
        )
        console.log("end");
    }
   }










