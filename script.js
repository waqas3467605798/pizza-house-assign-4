document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


  function order(){
    
    alert("Congratulations ..! Your order has been confirmed, We will delivered your order on your registered address within 20 minitus");
  }



function feed(){
    if(document.getElementById("first_name").value === ""  ){
      alert("must fill the filed")
    }
    else{
    alert("Thank You..! Your Feedback has been submitted successfully.");
  } }


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);

  });

  