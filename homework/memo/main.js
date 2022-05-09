"use strict";
const btnPostBox = document.querySelector("#btnPostBox");
const postBox = document.querySelector("#postBox");
const postBtn = document.querySelector("#btn-postingbox");

$(document).ready(() => {
  $("#cards-box").empty("");
  onPosting();
});

function onPosting() {
  $.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/post",
    data: {},
    success: function (response) {
      let articles = response["articles"];
      for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        let comment = article["comment"];
        let desc = article["desc"];
        let image = article["image"];
        let title = article["title"];
        let url = article["url"];
        let temp_html = `<div class="card">
        <img class="card-img-top" src="${image}"/>
        <div class="card-body">
        <a href="${url}" class="card-title">${title}</a>
        <p class="card-text main">${desc}</p>
        <p class="card-text comment">${comment}</p>
        </div>
        </div>`;
        $("#card-box").append(temp_html);
      }
    },
  });
}
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
