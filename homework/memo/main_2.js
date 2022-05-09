"use strict";
const btnPostBox = document.querySelector("#btnPostBox");
const postBox = document.querySelector("#postBox");
const postBtn = document.querySelector("#btn-postingbox");
//let count = 1;
/* function onClick() {
  alert("안녕!");
}

btnPostBox.addEventListener("click", onClick); */

/* btnPostBox.addEventListener("click", () => {
  if (count % 2 == 0) {
    alert("짝짝짝!");
  } else {
    alert("홀홀홀!");
  }
  count += 1;
  alert("안녕!");
}); */

function handlePostBox() {
  //let status = $("btnPostBox").css("display");
  let status = $("#postBox").css("display");
  console.log(status);
  if (status == "none") {
    $("#postBox").show();
    $("#btnPostBox").text("포스팅 박스 닫기");
  } else {
    $("#postBox").hide();
    $("#btnPostBox").text("포스팅 박스 열기");
  }
  return;
}

btnPostBox.addEventListener("click", handlePostBox);

function onPosting() {
  let img_url =
    "https://img.freepik.com/free-photo/white-cloud-on-blue-sky-and-sea_74190-4488.jpg?w=2000";
  let link_url = $("#urlInput").val();
  let title = $("#titleInput").val();
  let comment = $("#commentInput").val();
  let post_html = `<div class="card">
                    <img src="${img_url}"class="card-img-top"/>
                    <div class="card-body">
                    <a href="${link_url} class="card-title">${title}</a>
                    <p class="card-text comment">${comment}</p>
                    </div>
                    </div>`;
  $("#card-box").append(post_html);
}

postBtn.addEventListener("click", onPosting);
