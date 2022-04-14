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
