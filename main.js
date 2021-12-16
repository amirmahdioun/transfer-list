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
    const allToLeftBtn = document.querySelector('.all-to-left');
    const checkedToLeftBtn = document.querySelector('.checked-to-left');
    rightList.forEach((item) =>{
        leftList.push(item);
    })
    rightList = []
    leftSide.innerHTML = ''
    rightSide.innerHTML = ''
    renderDom(leftList, rightList);
    allToLeftBtn.classList.add('disabled');
    checkedToLeftBtn.classList.add('disabled');
}

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
function singleAddToLeft() {
    //write here
    if (rightList.length > 1) {
        rightList.forEach((item) => {
            if(item.checked){
                leftList.push(item)
                rightList = rightList.filter((obj) => obj.title != item.title )
            }
        })
    }else if (rightList.length <= 1) {
        rightList.forEach((item) => {
            if(item.checked){
                leftList.push(item)
                rightList = rightList.filter((obj) => obj.title != item.title )
            }
        })
        $('.checked-to-left').addClass('disabled')
        $('.all-to-left').addClass('disabled')
    }
    leftSide.innerHTML = ''
    rightSide.innerHTML = ''
    renderDom(leftList, rightList);
}

// Single add right to left
function singleAddToRight(){
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



// Handle checked
function handleChecked() {
  //write here
  document.addEventListener("DOMContentLoaded", function () {
    const getItemsLeftSide = document.querySelectorAll(".left-side .box");
    const getItemsRightSide = document.querySelectorAll(".right-side .box");
    // Left Side Event checked change
    getItemsLeftSide.forEach((element) =>
      element.children[0].addEventListener("change", function (event) {
        // define a variable and set target content
        const target = event.target.nextElementSibling.textContent;
        // navigate on left list object
        leftList.forEach((items) => {
          // check and change
          if (items.title === target) {
            items.checked = !items.checked;
            console.log(items);
          }
        });
      })
    );
    // Right Side Items Checked change
    getItemsRightSide.forEach((element) =>
      element.children[0].addEventListener("change", function (event) {
        // define a variable and set target content
        const target = event.target.nextElementSibling.textContent;
        // navigate on left list object
        rightList.forEach((items) => {
          // check and change
          if (items.title === target) {
            items.checked = !items.checked;
            console.log(items);
          }
        });
      })
    );
  });
}




