let input = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let box = document.querySelectorAll(".box");
let drag = null;
window.alert("Hello, this was made by 'Prince Mohamed'")
btn.onclick = function () {
  let items = document.querySelectorAll(".items");

  if (input.value != "") {
    box[0].innerHTML += `
            <span class = "items" draggable = true>${input.value}</span>
            `;
    input.value = "";
  }
  drageitems();
};

function drageitems() {
  let items_count = document.querySelectorAll(".items");
  items_count.forEach((ele) => {
    ele.addEventListener("dragstart", function () {
      console.log("Stat");
      drag = ele;
    });
    ele.addEventListener("dragend", function () {
      console.log("end");
      drag = null;
    });

    box.forEach((box_lite) => {
      box_lite.addEventListener("dragover", function (ele) {
        ele.preventDefault();
        this.style.background = "#04a6d3";
        this.style.transition = "0.3s";
      });
      box_lite.addEventListener("dragleave", function (ele) {
        this.style.background = "#fff";
        this.style.transition = "0.3s";
      });
      box_lite.addEventListener("drop", function (ele) {
        this.style.background = "#fff";
        box_lite.append(drag);
      });
    });
  });
}
