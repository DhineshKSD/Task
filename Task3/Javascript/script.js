function updateSelect(changedSelect, selectId) //same city occurance prevent fn
{
    var otherSelect = document.getElementById(selectId);
    for (var i = 0; i < otherSelect.options.length; ++i) 
    {
      otherSelect.options[i].disabled = false;
    }
    if (changedSelect.selectedIndex == 0) 
    {
      return;
    }
    otherSelect.options[changedSelect.selectedIndex].disabled = true;
  }

