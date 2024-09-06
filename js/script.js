


window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(40,500);
    $("#num2").countMe(30,30);
    $("#num3").countMe(40,130);

    }



  function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

  function downloadCV() {
    // Adjust the file path to the location of your CV
    window.location.href = 'cv_file/my_cv.pdf';
}

      // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// owl carsoual

$(document).ready(function(){
    $(".blog_carousel").owlCarousel({

        items:2,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
        responsive:{
             991:{
              items:4
             }
        }
        
      
        

    });


    $(".test_carousel").owlCarousel({

        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:2000,
        

    });


    new WOW().init();
    
  });



