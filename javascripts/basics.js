// Generated by CoffeeScript 1.4.0

$(function() {
  return $("body").keyup(function(event) {
    if (event.which === 37 && $(".paging .left > a").length) {
      return location.replace($(".paging .left >a").attr("href"));
    } else if (event.which === 39 && $(".paging .right > a").length) {
      return location.replace($(".paging .right >a").attr("href"));
    }
  });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42638070-1', 'tonghs.com');
ga('send', 'pageview');
