<script>
document.getElementById("text").addEventListener("click",loadKey);
function loadKey(){
        var url = window.location.href ,
  params = url.split('?')[1].split('&'),
        data = {}, tmp;1
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
var raw = "👇Copy👇</br>";
 raw  += data.kdevp;
    document.getElementById("tex").innerHTML =raw;
    //window.location.assign(raw);
   };
   </script>
