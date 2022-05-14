$(document).ready(function () {
    $(".share-article_link").click(function (e) {
      let curURL = encodeURIComponent(document.URL);
      let curTitle = encodeURIComponent($("h1").text());
      let imgURL = encodeURI($(".main-image").attr("src"));
      let openURL = curURL;
      let theTitle = encodeURIComponent("");

      if (theTitle.length < 1) {
        theTitle = curTitle;
      }

      if ($(this).hasClass("fb")) {
        openURL =
          "https://www.facebook.com/sharer.php?s=100&u=" +
          curURL +
          "&p[title]=" +
          curTitle +
          "&p[summary]=" +
          theTitle +
          "&p[images][0]=" +
          imgURL;
      }
      if ($(this).hasClass("link")) {
        curTitle =  $('.meta-title').text()
        openURL =
          "https://www.linkedin.com/shareArticle?mini=true&url=" +
          curURL +
          "&title=" +
          curTitle;
      }
      if ($(this).hasClass("twitter")) {
        openURL = "http://twitter.com/share?text=" + theTitle + "&url=" + curURL;
        console.log(openURL);
      }
      if ($(this).hasClass("whats-app")) {
        openURL =
          "https://api.whatsapp.com/send?text=" +
          curURL;
          console.log(openURL);
      }
      window.open(openURL, curTitle, "toolbar=0, status=0, width=640, height=640");
      return false;
    });
  });