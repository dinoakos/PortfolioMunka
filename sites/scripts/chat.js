           
            
function Heads() {
    return (
        <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
        <div class="lg:w-1/4">
            <img src="img/thispersondoesntexist.com.jpg" class="object-cover h-full w-full lg:h-12 lg:w-12 rounded-full" alt="" />
        </div>
        <div class="w-full">
            <div class="hidden lg:block text-lg font-bold">Teszt Elek</div>
            <div class="hidden lg:block text-gray-400">Very important text</div>
        </div>
    </div>
    )
    
}
console.log(<Heads />);
let person = <Heads />;
console.log(person);


let headArray = new Array(100);
function fillNull(){
    for(let i = 0;i<headArray.length;i++){
        
        headArray[i]=null;
    }
}
fillNull();
function AllHead(){
    for(let i = 0;i<20;i++){
        console.log(headArray.indexOf(null));
        headArray[headArray.indexOf(null)]=person;
    }
    
    return(headArray);
}
ReactDOM.render(
    <AllHead />,document.getElementById("chatHeadPipeline"),
)
let elementHead = document.getElementById("chatHeadPipeline");
elementHead.onscroll = function() {
    if (elementHead.scrollTop + elementHead.offsetHeight+5 >= elementHead.scrollHeight ) {
        ReactDOM.render(
            <AllHead />,document.getElementById("chatHeadPipeline"),
        )
        console.log("end");
    }
   }










