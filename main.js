const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

// InitialValues
let leftList = [
  { id: "item1", checked: false, title: "PHP" },
  { id: "item2", checked: false, title: "Python" },
  { id: "item3", checked: false, title: "Ruby" },
  { id: "item4", checked: false, title: "C++" },
];
let rightList = [
  { id: "item5", checked: false, title: "HTML" },
  { id: "item6", checked: false, title: "Css" },
  { id: "item7", checked: false, title: "JavaScript" },
  { id: "item8", checked: false, title: "Java" },
];

renderDom(leftList, rightList);

// Render Dom
function renderDom(leftListToRender, rightListToRender) {
  leftListToRender.forEach((item) => {
    leftSide.innerHTML += `<div class="box">
        <input type="checkbox" class="input-box" id="${item.id}" />
        <label for="${item.id}">${item.title}</label>
        </div>`;
  });

  rightListToRender.forEach((item) => {
    rightSide.innerHTML += `<div class="box">
          <input type="checkbox" class="input-box" id="${item.id}" />
          <label for="${item.id}">${item.title}</label>
          </div>`;
  });

  registerEvents();
}

// Clear Dom
function clearDom() {
  document.querySelectorAll(".side").forEach((el) => {
    el.innerHTML = "";
  });
}

// Event
function registerEvents() {}


// All add right to left
function allAddRightToLeft(){
  //write here

}

// All add left to right
function allAddLeftToRight(){
  //write here
  if (leftList.length > 1) {
    leftList.forEach((item) => {
      if(item.checked){
        rightList.push(item)
        leftList = leftList.filter((obj) => obj.title != item.title )
      }
    })
  }else if (leftList.length <= 1) {
    leftList.forEach((item) => {
      if(item.checked){
        rightList.push(item)
        leftList = leftList.filter((obj) => obj.title != item.title )
      }
    })
    $('.checked-to-right').addClass('disabled')
    $('.all-to-right').addClass('disabled')
  }
  leftSide.innerHTML = ''
  rightSide.innerHTML = ''
  renderDom(leftList, rightList);
}
$('.checked-to-right').click(singleAddToRight)

}


// Single add left to right
function singleAddToLeft(){
  //write here

}

// Single add right to left
function singleAddToRight(){
  //write here

}


// Handle checked
function handleChecked(){
  //write here

}




