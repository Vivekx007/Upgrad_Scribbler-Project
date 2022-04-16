var model = document.getElementById("delete-modal");
var deleteButton = document.getElementsByClassName("delete");
var deleteModal = document.getElementById("delete-modal");

(function () {
  for (var i = 0; i < deleteButton.length; i++)
    deleteButton[i].addEventListener("click", showDeleteModal);
})();

var hideDeleteModal = document.getElementById("no-delete");

function showDeleteModal() {
  model.style.display = "block";
}

hideDeleteModal.addEventListener("click", hideModal);
function hideModal() {
  // try {
  deleteModal.style.display = "none";
}

//This is for Showing Post Details in new Page
function viewPostDetails(id) {
  var post = document.getElementById(id);
  var author = post.querySelector(".author-name").innerHTML;
  var title = post.querySelector(".title").innerHTML;
  var content = post.querySelector(".post-content").innerHTML;
  var postUrl =
    "post.html?author=" + author + "&title=" + title + "&content=" + content;

  window.location.href = postUrl;
  console.log(postUrl);
}
