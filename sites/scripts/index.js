//get the shop div from the index.html and when clicked open shop.html
let elementShop = document.getElementById("Shop");
elementShop.onclick = function () {
    window.open("./shop.html", "_self")

}
//same with news
let elementNews = document.getElementById("News");
elementNews.onclick = function () {
    window.open("./news.html", "_self")

}
//same with chat
let elementChat = document.getElementById("Chat");
elementChat.onclick = function () {
    window.open("./chat.html", "_self")

}