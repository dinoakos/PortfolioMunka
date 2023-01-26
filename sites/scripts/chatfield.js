//what I want to render in the text pipeline
function Texts() {
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
//getting the correct object
let text = <Texts />;
//making an array, the length will determine the maximum number of texts on the page
let textArray = new Array(100);
//filling it with nulls so we can reference it later
function fillNull() {
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = null;
    }
}
fillNull();
//this function adds 10 "new" texts to the array which gets rendered
function AllText() {
    for (let i = 0; i < 10; i++) {

        textArray[textArray.indexOf(null)] = text;
    }

    return (textArray);
}
//this is here so the site loads text by default
ReactDOM.render(
    <AllText />, document.getElementById("chat"),
)
//when scrolling and at the buttom of the page this inserts more texts
let elementText = document.getElementById("chat");
elementText.onscroll = function () {
    if (elementText.scrollTop + elementText.offsetHeight + 5 >= elementText.scrollHeight) {
        ReactDOM.render(
            <AllText />, document.getElementById("chat"),
        )

    }
}