var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var close = document.getElementById("closeId");
var close2 = document.getElementById("closeId2");

const signUpButton = (id2) => {
  var modal = document.getElementById(id2);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");

  // When the user clicks on <span> (x), close the modal
  for (var i = 0; i < span.length; i++) {
    span[i].onclick = function () {
      modal.style.display = "none";
    };
  }
  // When the user clicks the button, open the modal
  modal.style.display = "block";

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

function signupMember() {
  modal2.style.display = "block";
  modal1.style.display = "none";

  close.onclick = () => {
    console.log(modal2);
    modal2.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal2) {
      modal2.style.display = "none";
    }
  };
}

const createPostModal = (cp, modals) => {
  var modal3 = document.getElementById(modals);
  modal3.style.display = "block";

  close2.onclick = () => {
    modal3.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal3) {
      modal3.style.display = "none";
    }
  };
};
