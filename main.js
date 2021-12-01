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
    rightList.forEach((item) =>{
        leftList.push(item);
    })
    rightList = []
    leftSide.innerHTML = ''
    rightSide.innerHTML = ''
    renderDom(leftList, rightList);
    $('.all-to-left').addClass('disabled')
    $('.checked-to-left').addClass('disabled')
}
$('.all-to-left').click(allAddRightToLeft)

// All add left to right
function allAddLeftToRight(){
  //write here
  const allToRightBtn = document.querySelector('.all-to-right');
  const checkedToRightBtn = document.querySelector('.checked-to-right');
  leftSide.innerHTML = '';
  rightSide.innerHTML = '';
  leftList.forEach(item => {
    rightList.push(item);
  });
  leftList = [];
  allToRightBtn.classList.add('disabled');
  checkedToRightBtn.classList.add('disabled');
  renderDom(leftList,rightList);
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




