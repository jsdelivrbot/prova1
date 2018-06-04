var jsonData = $.getJSON( 'https://rawgit.com/billy1816/prova1
 
     $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Select -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].stateid + "'>" + jsonData.Table[i].statename + "</option>";
         }
 
         $("#DLState").html(listItems);
     });
