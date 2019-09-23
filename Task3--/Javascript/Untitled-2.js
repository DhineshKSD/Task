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
  function updatedSelect(changedSelect, selectId) //same city occurance prevent fn
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
  function changetextbox(radioid)
{
if(radioid == 1)
{    
   	document.getElementById('start1').style.display = 'block';
    document.getElementById('end1').style.display = 'block';
    document.getElementById('start11').style.display = 'none';
    document.getElementById('end11').style.display = 'none';
 }
 if(radioid == 2){
  document.getElementById('start1').style.display = 'none';
  document.getElementById('end1').style.display = 'none';
  document.getElementById('start11').style.display = 'block';
  document.getElementById('end11').style.display = 'block';
 }
}