$(document).ready(function() {

           var   code = document.getElementById('website_name').value;
      // console.log($form);
       var z = 'code='+code;
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
            
            console.log(response.row.length);
            console.log(jqXHR);
            //retrieved data can be displayed on screen
            if(response.row.length ==0)
            {
                document.getElementById('msg_id').innerHTML = "No information found";
                $('#msg_id').fadeIn().delay(1000).fadeOut();
                 document.getElementById('name').innerHTML = '';
            document.getElementById('phone').innerHTML = ' ';
            document.getElementById('email').innerHTML = ' ';
            document.getElementById('address').innerHTML = ' ';
            document.getElementById('city').innerHTML = ' ';
            }
            document.getElementById('name').innerHTML = response.row[0][1]+', ';
            document.getElementById('phone').innerHTML = response.row[0][2]+', ';
            document.getElementById('email').innerHTML = response.row[0][3]+', ';
            document.getElementById('address').innerHTML = response.row[0][4]+', ';
            document.getElementById('city').innerHTML = response.row[0][5]+', ';
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