



// <!-- datePicker Jquery -->

$( function() {
    $( "#inputcheckin" ).datepicker();
    $( "#inputcheckout" ).datepicker();
//   <!-- Slick Carousel js jquery -->
    $('.level-slider').slick({
      dots: true,
      arrows:true,
      fade: true
      });
  } );




//   video play and pause

const VideoPlay  = document.getElementById("video-play");
const VideoPause  = document.getElementById('video-pause');
const VideOp = document.getElementById('level-video');
// Play Operation
const playtt = () =>{
if (VideOp.pause){
    VideOp.play();
    VideoPlay.style.display = 'none';
    VideoPause.style.display = 'block';
}
}
// Pause Operation

const paustt = () =>{
    if (VideOp.play){
        VideOp.pause();
        VideoPlay.style.display = 'block';
        VideoPause.style.display = 'none';
    }
    }
    

    // class active


    // function myFunction(e) {
    //     var elems = document.querySelector(".active");
    //     if(elems !==null){
    //      elems.classList.remove("active");
    //     }
    //    e.target.className = "active";
    //   }


      function myFunction(e) {
        if (document.querySelector(' a.active') !== null) {
          document.querySelector(' a.active').classList.remove('active');
        }
        else{
            document.querySelector(' a.active') == "active";

        }
            e.target.className = "active";
        
      }