function Heads() {
    return (
        <div>
                <div class="flex justify-end mb-4">
                  <div class="mr-2 p-5 bg-blue-300 rounded-l-3xl text-white">
                    Lorem ipsum!
                  </div>
                  
                </div>
                <div class="flex justify-start mb-4">
                  <div
                    class="ml-2 p-5 bg-gray-400 rounded-r-3xl text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                    at praesentium, aut ullam delectus odio error sit rem. Architecto
                    nulla doloribus laborum illo rem enim dolor odio saepe,
                    consequatur quas?
                  </div>
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
    for(let i = 0;i<10;i++){
        console.log(headArray.indexOf(null));
        headArray[headArray.indexOf(null)]=person;
    }
    
    return(headArray);
}
ReactDOM.render(
    <AllHead />,document.getElementById("chat"),
)
let elementHead = document.getElementById("chat");
elementHead.onscroll = function() {
    if (elementHead.scrollTop + elementHead.offsetHeight+5 >= elementHead.scrollHeight ) {
        ReactDOM.render(
            <AllHead />,document.getElementById("chat"),
        )
        console.log("end");
    }
   }