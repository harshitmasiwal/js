// function searchText() {
//     const content = document.getElementById('content');
//     const regex = "hello abes";
//     const matchIndex = content.textContent.search("abes");
//         return matches ? matches.length : 0;
//     }
//     return matches.length
   
// function searchText() {
//     const content = document.getElementById('content');
//     const regex = /hello abes/;
//     const newText = content.textContent.replace(regex, 'hello world');
//     content.textContent = newText;
// }


const carNames = ['Toyota', 'Honda', 'Ford', 'BMW', 'Audi'];
var text = "";
for (let i = 0; i < carNames.length; i++) {
    console.log(text += carNames[i] + "<br>")
}