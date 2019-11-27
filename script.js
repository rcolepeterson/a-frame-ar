
//#region - init window load
window.onload = () => {

    document.querySelector('a-scene').addEventListener('loaded', function () {

        document.getElementById("cokeg1").addEventListener("click", ShowIconContent);
        document.getElementById("cokeg2").addEventListener("click", ShowIconContent);
        document.getElementById("cokeg3").addEventListener("click", ShowIconContent);

    })

};
//#endregion 

//#region - video set up
const constraints = {
    video: true,
    exact: "environment",
    facingMode: "environment"
};

const video = document.querySelector("video");
navigator.mediaDevices
    .getUserMedia({
        video: { facingMode: "environment", height: 700, width: 500 }
    })
    .then(function (stream) {
        window.stream = stream;
        video.srcObject = stream;
    });

//#endregion


//#region - Interation functions

//Drop coke bottle in to sceen
function dropIcon() {
    document.getElementById("cokeg1").object3D.visible = true;
}

function aFrameClickCatch() {
    console.log("test element clicked");
}

function ShowIconContent() {
    console.log("A-frame element clicked");
    //populate divs with content

    //show modal with divs
    showModal();
    bottleContent.style.display = "block";
    bottleShareBtn.style.display = "block";
}

function showModal() {
    modal.style.display = "block";
    arControls.style.display = "none";
    //hide all modals when resetting the experience
    var divsToHide = document.getElementsByClassName("modal-content");
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
    }

}

function closeModal() {
    modal.style.display = "none";
    arControls.style.display = "block";
}

//#endregion 




//#region - Modal content
let arControls = document.querySelector(".ar-controls");
let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
let modalContent1 = document.getElementById("modal-content-1");
let modalContent2 = document.getElementById("modal-content-2");
let createDropBtn = document.getElementById("create-drop-btn");
let bottleDropBtn = document.getElementById("bottle-drop-btn");
let bottleShareBtn = document.getElementById("bottle-share-btn");
let bottleContent = document.getElementById("bottle-content");
//#endregion


//#region - Bottle drop functionality 

//Click to start drop experience
arControls.onclick = function () {
    showModal();
    modalContent1.style.display = "block";
}

//Step 1 -Select smile
modalContent1.onclick = function () {
    //set smile value and display background modal
    modalContent2.style.display = "block";
}

//Step 2 - Select background
modalContent2.onclick = function () {
    //Select background and show create drop button
    createDropBtn.style.display = "block";
}

//Step 3 - Create your drop - takes you to the preview screen
createDropBtn.onclick = function () {
    //Hide create modals
    modalContent1.style.display = "none";
    modalContent2.style.display = "none";
    createDropBtn.style.display = "none";
    //show preview modals 
    bottleDropBtn.style.display = "block";
    bottleContent.style.display = "block";
}

//Step 4 - Drop your bottle - shows bottle on screen 
bottleDropBtn.onclick = function () {
    //hide modal 
    closeModal();
    //drop bottles
    dropIcon();
}

//close modal
closeBtn.onclick = function () {
    closeModal();
}

//close modal
window.onclick = function (e) {
    if (e.target == modal) {
        closeModal();
    }
}
//#endregion


//#region - Dropdown script 

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //#endregion


  // close sub-header

  function closeSubHeader() {
    document.querySelector(".sub-head").style.display = 'none'
  }

  document.querySelector(".sub-head").addEventListener("click", closeSubHeader);
