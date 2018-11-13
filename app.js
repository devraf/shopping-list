// var app = {
//   init: function() {
//     this.startTimerButton();
//     this.stopTimerButton();
//     this.resetTimerButton();
//   },
//   seconds: 0,
//   countBySeconds: function() {
//     this.seconds++;
//     this.updateSecondsHandler();
//     console.log('second', app.seconds);
//   },
//   startTimer: {},
//   setTimer: function() {
//     startTimer = setInterval(app.countBySeconds.bind(app), 10);
//   },
//   stopTimer: function() {
//     clearInterval(startTimer);
//   },
//   updateSecondsHandler: function() {
//     var htmlTimer = document.querySelector('.time');
//     htmlTimer.innerText = this.seconds;
//   },
//   startTimerButton: function() {
//     var startButton = document.querySelector('.start');
//     startButton.addEventListener('click', this.setTimer);
//   },
//   stopTimerButton: function() {
//     var stopButton = document.querySelector('.stop');
//     stopButton.addEventListener('click', this.stopTimer);
//   },
//   resetTimerButton: function() {
//     var resetButton = document.querySelector('.reset');
//     resetButton.addEventListener('click', function() {
//       app.seconds = 0;
//       app.updateSecondsHandler();
//       console.log(`timer reset to ${app.seconds}`);
//     });
//   }
// }
// app.init();

// var appTwo = {
//   init: function() {
//     this.keyPressed();
//     this.updateLetters();
//   },
//   keyPressed: function() {
//     document.addEventListener('keypress', function(event) {
//       console.log(event.key);
//     });
//   },
//   updateLetters: function() {
//     var typedText = document.querySelector('.keyType');
//     document.addEventListener('keypress', function(event) {
//       if (event.charCode === 0) {
//         typedText.innerText = `${event.key} = ${event.keyCode}`;
//       } else if (event.charCode === 32) {
//         typedText.innerText = `Spacebar = ${event.charCode}`
//       } else
//         typedText.innerText = `${event.key} = ${event.charCode}`;
//     });
//   }
// }
//
// appTwo.init();
//
// var appThree = {
//   init: function () {
//     this.changeColorHandler();
//   },
//   changeBoxColor: function (color) {
//     var mainBox = document.querySelector('.box');
//       mainBox.style.background = color;
//   },
//   changeColorHandler: function () {
//     var colorInput = document.querySelector('.colorValue');
//     var changeColorButton = document.querySelector('.change');
//
//     changeColorButton.addEventListener('click', function () {
//       appThree.changeBoxColor(colorInput.value);
//     });
//   }
// }
//
// appThree.init();
//
// var appFour = {
//   letterCounter: function () {
//     var letterInput = document.querySelector('.wordInput');
//     var currentLetterCount = document.querySelector('.charNumber');
//
//     letterInput.addEventListener('input', function () {
//       currentLetterCount.innerText = letterInput.value.length;
//     });
//   }
// }


//Shopping App

// var shop = {
//   shoppingItemList: [],
//
//   addItemToList: function(item) {
//     this.shoppingItemList.unshift({
//       label: item,
//       highPriority: false,
//       completed: false
//
//     });
//   },
//
//   removeItemFromList: function(position) {
//     this.shoppingItemList.splice(position, 1);
//   }
// }


//remove an item from the List

//striketrough completed items

//make an item high priority

//add input for adding items

//hide input when not adding item to List

//use button to show input for adding items

//use button to add item from input

var shop = {
  init: function() {
    this.saveItemToList();
    this.deleteLiNode();
  },
  shoppingItemList: [],
  addItemToList: function(item) {
    this.shoppingItemList.unshift({
      label: item,
      highPriority: false,
      completed: false
    });
  },
  updateItemInList: function(position, newItem) {
    this.shoppingItemList[position].label = newItem;
  },
  removeItemFromList: function(position) {
    this.shoppingItemList.splice(position, 1);
  },
  makeItemHighPriority: function(position) {
    this.shoppingItemList[position].highPriority = !this.shoppingItemList[position].highPriority;
  },
  completedShoppingItem: function(position) {
    this.shoppingItemList[position].completed = !this.shoppingItemList[position].completed;
  },
  //UI Layout
  //Adds item name and delete button to a newly created li
  //Updates all current li's classList
  saveItemToList: function() {
    var itemInput = document.querySelector('.itemInput');
    var saveItem = document.querySelector('.saveItemButton');

    saveItem.addEventListener('click', function() {
      shop.addItemToList(itemInput.value);
      shop.createLiElements();
      shop.addItemNameToLiNodes();
      shop.addDeleteButtonsToLiNodes();
    });
  },
  createLiElements: function() {
    var ulNode = document.querySelector('.itemList');
    var li = document.createElement('li');

    ulNode.appendChild(li);
  },
  addItemNameToLiNodes: function() {
    var ulNode = document.querySelector('.itemList');

    for (var i = 0; i < shop.shoppingItemList.length; i++) {
      ulNode.children[i].innerText = shop.shoppingItemList[i].label;
    };
  },
  addDeleteButtonsToLiNodes: function() {
    var ulNode = document.querySelector('.itemList');

    for (var i = 0; i < shop.shoppingItemList.length; i++) {
      var deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete'
      ulNode.children[i].classList.add(i.toString());
      ulNode.children[i].appendChild(deleteButton);
    }
  },
  deleteLiNode: function() {
    var ulNode = document.querySelector('.itemList');
    var deleteButton = document.querySelector('button');

    ulNode.addEventListener('click', function(event) {
      var selectedItemToDelete = event.target.parentNode.classList;
      event.target.parentNode.remove();
      shop.removeItemFromList(parseInt(selectedItemToDelete));
    });
  },
  //add high priority button to each item
  //add completed button to each item
  //add change QTY button to each item
  //give user chance to set QTY before adding item to the List
  //give user chance to set item as high priority before adding item to list
  //give user option to show/hide QTY
  //show/hide add new item input
  //give user a chance to cancel adding new item to List
  //remove all completed items from the list

  deleteLiElements: function() {
    var ulNode = document.querySelector('.itemList');
  }
}

shop.init();
