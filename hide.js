 var isShow = false;
  function show0() {
    if(!isShow) {
        isShow = true;
       document.getElementById('hide0').style.display='';
       document.getElementById('show0').innerText = "_(┐「ε:)_";
   }
   else {
       isShow = false;
       document.getElementById('hide0').style.display='none';
       document.getElementById('show0').innerText = "诶嘿";
   }
}