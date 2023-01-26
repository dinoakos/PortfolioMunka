//what I want to render in the news pipeline
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
//getting the correct object
let hir = <News />;
//making an array, the length will determine the maximum number of news on the page
let newsArray = new Array(100);
//filling it with nulls so we can reference it later
function fillNull(){
    for(let i = 0;i<newsArray.length;i++){
        newsArray[i]=null;
    }
}
fillNull();
//this function adds 20 "new" news to the array which gets rendered
function AllNews(){
    for(let i = 0;i<5;i++){
        
        newsArray[newsArray.indexOf(null)]=hir;
    }
    
    return(newsArray);
}
//this is here so the site loads news by default
ReactDOM.render(
    <AllNews />,document.getElementById("newsPipeline"),
)
//when scrolling and at the buttom of the page this inserts more news
window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset+5 >= document.body.offsetHeight) {
        ReactDOM.render(
            <AllNews />,document.getElementById("newsPipeline"),
        )
        
    }
   }
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${year}-${month}-${day}`;
ReactDOM.render(
    currentDate,document.getElementById("time"),
)











