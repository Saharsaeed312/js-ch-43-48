// Question:no:01:
function myLink() {
    alert("You clicked the link!");
}
// Question:no:02:
function showMessage(){
    alert("Thanks for purchasing from us!")
}
// Question:no:03:
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
  }
//   Question:no:04
function changeImage(img) {
    img.src = "https://via.placeholder.com/300/00FF00?text=Hovered";
  }

  function resetImage(img) {
    img.src = "https://via.placeholder.com/300/FF0000?text=Original";
  }
//   Question:no:05:
    let counter = 0;
    function increase() {
      counter++;
      updateCounter();
    }
    function decrease() {
      counter--;
      updateCounter();
    }
    function updateCounter() {
      document.getElementById('counter').textContent = counter;
    }
