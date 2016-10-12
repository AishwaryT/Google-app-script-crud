// Variable to hold request


// Bind to the submit event of our form
 $(document).ready(function() {

    // Abort any pending request
   
    // setup some local variables
   // var $form = $(this);
   var url = $('#url').val();
   var business = $('#businessname').val();
    var url_hits = $('#url_hits').val();
  // console.log($form);
    var z = 'url='+url+'&businessname='+business+'&url_hits='+url_hits;
    console.log(z);
    // Let's select and cache all the fields
  //  var $inputs = $form.find("input, select, button, textarea");
    
    // Serialize the data in the form
  //  var serializedData = $form.serialize();
  //  console.log($form.serialize());
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
   // $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "SCRIPT URL GOES HERE",
        type: "post",
        data: z
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
       //  window.location = url;
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
    //    $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});