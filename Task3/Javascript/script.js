/*function onewayCheck() {
    if (document.getElementById('oneway').checked) {
        document.getElementById('ifoneway').style.visibility = 'hidden';
    }
    else document.getElementById('ifoneway').style.visibility = 'visible';

}*/
function changetextbox()
{
    if (document.getElementById('trip').value == "Oneway-Trip") {
        document.getElementById('ifoneway').style.visibility = 'hidden';
    } else {
        document.getElementById('ifoneway').style.visibility = 'visible';
    }
}
function updateSelect(changedSelect, selectId) {
    var otherSelect = document.getElementById(selectId);
    for (var i = 0; i < otherSelect.options.length; ++i) {
      otherSelect.options[i].disabled = false;
    }
    if (changedSelect.selectedIndex == 0) {
      return;
    }
    otherSelect.options[changedSelect.selectedIndex].disabled = true;
  }
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");
  
  var span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() 
  {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
