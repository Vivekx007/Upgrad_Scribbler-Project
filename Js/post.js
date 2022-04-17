window.onload = function () {
  var params;
  var url = document.location.href;
  params = url.split("?")[1].split("&");
  console.log(params);
  var data = {};

  var tmp = "";
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
  }
  if (data.author && data.title && data.content) {
    document.getElementById("postAuthor").innerHTML = decodeURI(data.author);

    document.getElementById("postTitle").innerHTML = decodeURI(data.title);

    document.getElementById("postContent").innerHTML = decodeURI(data.content);
  }
};

var likeCount = 0;

// Like Post Function
function likePost() {
  likeCount++;
  var postLikeLabel = document.getElementById("postLikeLabel");
  postLikeLabel.innerHTML = "Liked!";
  var postLikeLabelContent =
    likeCount == 1
      ? likeCount + " person likes this!"
      : likeCount + " people like this!";
  var postLikesInfo = document.getElementsByClassName("post-like-info");
  postLikesInfo[0].innerHTML = postLikeLabelContent;
}

//Post User Comment Function
function postUserComment() {
  var comment = document.getElementById("userComment").value;
  if (!comment) {
    return;
  }
  var commentsHolder = document.getElementById("commentsHolder");
  var oldComments = commentsHolder.getElementsByClassName("user-comment");
  var oldCommentsHolder = "";
  for (var i = 0; i < oldComments.length; i++) {
    var oldComment = oldComments[i];
    oldCommentsHolder +=
      '<p class="user-comment">' + oldComment.innerHTML + "</p>";
  }
  commentsHolder.innerHTML = "";
  var userComment = document.createElement("p");
  userComment.classList.add("user-comment");
  userComment.innerHTML = comment;
  commentsHolder.appendChild(userComment);
  commentsHolder.innerHTML += oldCommentsHolder;
  commentsHolder.style.display = "block";
}

//Edit User Post Function
function editUserPost() {
  var editPostBtn = document.getElementById("editPostBtn");
  editPostBtn.style.display = "none";
  var savePostBtn = document.getElementById("savePostBtn");
  savePostBtn.style.display = "inline-flex";

  var postTitle = document.getElementById("postTitle");
  postTitle.setAttribute("contenteditable", true);
  postTitle.style.border = "1px solid pink";
  var postCotent = document.getElementById("postContent");
  postCotent.setAttribute("contenteditable", true);
  postCotent.style.border = "1px solid pink";
}

//Save User Edited Post
function saveUserPost() {
  var savePostBtn = document.getElementById("savePostBtn");
  savePostBtn.style.display = "none";
  var editPostBtn = document.getElementById("editPostBtn");
  editPostBtn.style.display = "inline-flex";
  var postTitle = document.getElementById("postTitle");
  postTitle.setAttribute("contenteditable", false);
  postTitle.style.border = "0px";
  var postCotent = document.getElementById("postContent");
  postCotent.setAttribute("contenteditable", false);
  postCotent.style.border = "0px";
}
