function onewayCheck() {
    if (document.getElementById('oneway').checked) {
        document.getElementById('ifoneway').style.visibility = 'hidden';
    }
    else document.getElementById('ifoneway').style.visibility = 'visible';

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