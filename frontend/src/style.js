//        FIRST LINE BELOW IS PART OF CURRENT SLIDESHOW THAT WORKS 

// let slideIndex = 0;




//    ---------- Code for click through slideshow - not currently using --------

// showSlides()   ---------> needs to be added to index.js if using

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n)
//   }
  
//   // Thumbnail image controls
//   function currentSlide(n) {
//     showSlides(slideIndex = n)
//   }

  
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides")
//     let dots = document.getElementsByClassName("dot")

//     if (n > slides.length) {
//         slideIndex = 1
//       }
//     if (n < 1) {
//         slideIndex = slides.length
//       }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "")
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//   }

//  -------------  End of clickthrough slideshow code -----------------------




//            CURRENT SLIDESHOW CODE THAT WORKS:  

//  showAutomaticSlides()  ---->  needs to be added to index.js if using

// function showAutomaticSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showAutomaticSlides, 3500); // Change image every 3.5 seconds
// }

//      END OF CURRENT SLIDESHOW CODE THAT WORKS

// -------------------------------------------------------------------------

