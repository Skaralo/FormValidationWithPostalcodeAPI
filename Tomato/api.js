
$('#validationCustom05, #validationCustom06').on('change', function(){


// This part gets the input
    
if ($('#validationCustom05').val() && $('#validationCustom06').val()) {
        $.ajax({
        url: 'http://photon.komoot.de/api/?q='+$('#validationCustom05').val()+'+'+$('#validationCustom06').val(),
        method: 'GET',
        // contentType: 'application/json',
        
         
        success: handleResults  // Name of a function to be called after API call was successful
        });
    }
    
});
// This part outputs the results

function handleResults(res) {
    // res = results

  var street = $("#validationCustom07"); //make var for retrieve from input
  var number = $("#validationCustom08"); //make var for retrieve from input
   
    // url += "&q="+postcode+number+",nl"; 
    // change var name
  
  
    
    $("#validationCustom07").val(res.features[0].properties.street);
    // 
    $("#validationCustom08").val(res.features[0].properties.city);
    
  }
  
// The example link that was used to see which data names were needed: http://photon.komoot.de/api/?q=2641tm+8
// http://photon.komoot.de/

    
    