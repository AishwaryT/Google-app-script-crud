 $(document).ready(function() {

   var   row_id = document.getElementById('row_id').value;
          
      // console.log($form);
       var z = 'row_id='+row_id;
        console.log(z);
      
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