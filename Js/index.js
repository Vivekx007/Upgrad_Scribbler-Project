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
