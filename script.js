// // DROP DOWN LAND NEED TO REFACTOR

// const pueblosDropDown = document.getElementById('pueblos-dropdown')
// const pueblosDropped = document.getElementById('pueblos-dropped')
// pueblosDropped.style.display = 'none';
// // pueblosDropDown.innerHTML = '+'


// function pueblosToggleDropDown() {
//   if (pueblosDropped.style.display === 'none') {
//     pueblosDropped.style.display = 'block'
//     // dropDownSymbol.innerHTML = '-'
//   } else {
//     pueblosDropped.style.display = 'none'
//     // dropDownSymbol.innerHTML = '+'
//   }
// }


// const natureDropDown = document.getElementById('nature-dropdown')
// const natureDropped = document.getElementById('nature-dropped')
// natureDropped.style.display = 'none';
// // pueblosDropDown.innerHTML = '+'


// function natureToggleDropDown() {
//   if (natureDropped.style.display === 'none') {
//     natureDropped.style.display = 'block'
//     // dropDownSymbol.innerHTML = '-'
//   } else {
//     natureDropped.style.display = 'none'
//     // dropDownSymbol.innerHTML = '+'
//   }
// }

// const mirrorsDropDown = document.getElementById('mirrors-dropdown')
// const mirrorsDropped = document.getElementById('mirrors-dropped')
// mirrorsDropped.style.display = 'none';
// // pueblosDropDown.innerHTML = '+'


// function mirrorsToggleDropDown() {
//   if (mirrorsDropped.style.display === 'none') {
//     mirrorsDropped.style.display = 'block'
//     // dropDownSymbol.innerHTML = '-'
//   } else {
//     mirrorsDropped.style.display = 'none'
//     // dropDownSymbol.innerHTML = '+'
//   }
// }


// modal land
let ttlModals = 28;

function showModal(cellID) {
  for (let i = 0; i < ttlModals; i++) {
    let allModals = `modalcontent${[i]}`
    let allModalsID = document.getElementById(allModals)
    allModalsID.style.display = 'none'
  }
  let selectedID = `modalcontent${cellID}`
  let modalSelected = document.getElementById(selectedID)
  modalSelected.style.display = 'block'
}

function allModalGen() {
  let allModalsArray = []
  for (let i = 0; i < ttlModals; i++) {
    let allModals = `modalcontent${[i]}`
    let allModalsID = document.getElementById(allModals)
    allModalsArray.push(allModalsID)
  }
  return allModalsArray
}
let allModalsArray = allModalGen()

function closeModal() {
  for (let i = 0; i < ttlModals; i++) {
    allModalsArray[i].style.display = 'none'
  }
}

// const pueblosHeader = document.getElementById('pueblos-header')
// const pueblosHeaderA = document.getElementById('pueblos-header-a')

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 350) {
//     pueblosHeader.style.fontSize = "1rem";
//     pueblosHeader.style.display = "flex";
//     // pueblosHeader.style.justifyContent = "left"
//     pueblosHeaderA.style.color = "black"

//   } else {
//     pueblosHeader.style.fontSize = "3rem";
//     pueblosHeader.style.justifyContent = "center"
//     // pueblosHeaderA.style.color = "#F2955E"
//   }
// }
































// function toggleDropDown() {
//   return (mirrorsDropped.style.display === 'none') ? mirrorsDropped.style.display = 'block' : mirrorsDropped.style.display = 'none'
// }



// let testDiv = document.getElementById('testdiv')
// let testDivImg = document.getElementById('testdivimg')




// function toggleGalleryDrop() {
//   if (zoom.style.display === 'none') {
//     zoom.style.display = 'block'
//     testDivImg.style.width = '360px'
//     testDivImg.style.height = '360px'
//   } else {
//     zoom.style.display = 'none'
//     testDivImg.style.width = ''
//     testDivImg.style.height = ''
//   }
// }




// let expanded = false
// let zoom = document.getElementById('zoom0')
// zoom.style.display = 'none'

// function imageSelected(cellID) {
//   console.log("image selected func")
//   imageChosen = document.getElementById(cellID);
//   let zoomSelector = `zoom${cellID}`
//   let selectedZoom = document.getElementById(zoomSelector)
//   console.log(selectedZoom)
//   imageExpander(imageChosen) 
//   }

//   function imageExpander(imageChosen) {
//     expanded = !expanded
//     if (expanded) {
//       console.log("expanded")
//       imageChosen.classList.add("expand")
//       imageChosen.classList.remove("collapse")
//     } else {
//       console.log("collapsed")
//       imageChosen.classList.add("collapse")
//       imageChosen.classList.remove("expand")
//     }
//   }