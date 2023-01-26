//what I want to render in the heads pipeline        
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
//getting the correct object
let person = <Heads />;
//making an array, the length will determine the maximum number of heads on the page
let headArray = new Array(100);
//filling it with nulls so we can reference it later
function fillNull() {
    for (let i = 0; i < headArray.length; i++) {
        headArray[i] = null;
    }
}
fillNull();
//this function adds 20 "new" heads to the array which gets rendered
function AllHead() {
    for (let i = 0; i < 20; i++) {

        headArray[headArray.indexOf(null)] = person;
    }

    return (headArray);
}
//this is here so the site loads heads by default
ReactDOM.render(
    <AllHead />, document.getElementById("chatHeadPipeline"),
)
let elementHead = document.getElementById("chatHeadPipeline");
//when scrolling and at the buttom of the page this inserts more heads
elementHead.onscroll = function () {
    if (elementHead.scrollTop + elementHead.offsetHeight + 5 >= elementHead.scrollHeight) {
        ReactDOM.render(
            <AllHead />, document.getElementById("chatHeadPipeline"),
        )

    }
}










