console.dir(document.body);
// Search button par click event listener
document.querySelector(".button").addEventListener("click", function() {
  // Input field ki value fetch karo
  var searchQuery = document.querySelector(".input").value.toLowerCase();

  // Section ke items ko fetch karo
  var items = document.querySelectorAll("#section .Box");

  // Items ko filter karo
  items.forEach(function(item) {
    var itemText = item.querySelector("p").textContent.toLowerCase();
    if (itemText.includes(searchQuery)) {
      item.style.display = "block";
    } else 
      item.style.display = "none";
     });
     /*let items2 = document.querySelectorAll(".box-container");
    items2.forEach(function(element) {
      element.style.display = "none";
  });*/
});
let loadMoreBtn = document.querySelector('#button4');
let currentItem = 12;

loadMoreBtn.onclick = () => {
let boxes = document.querySelectorAll(".box-container");
  boxes.forEach(function(element) {
   element.style.display = "flex";
 })
if(currentItem = 24){
  loadMoreBtn.style.display = 'none';
 }
}