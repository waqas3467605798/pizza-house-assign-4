document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


  function order(){
    
    alert("Congratulations ..! Your order has been confirmed, We will delivered your order on your registered address within 20 minitus");
  }



function feed(){
    if(document.getElementById("first_name").value === "" || document.getElementById("contact").value === "" || document.getElementById("address").value === ""  || document.getElementById("feedback").value === ""  ){
      alert("must fill the all input fileds")
    }
    else{
    // alert("Thank You..! Your Feedback has been submitted successfully.");
      document.getElementById("feed_back_heading").innerHTML = "";
      document.getElementById("feed_back").innerHTML = "<h3 class='center' style='color:green'> Thank you..! Your Feedback has been submitted successfully  </h3>" + "<div class='center'> <a href='feedback.html'> <button class='waves-effect waves-light btn'> Go back </button> </a> </div>"

  } }


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);

  });

  