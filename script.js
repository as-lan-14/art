//global 
const menu = document.getElementById("menu");
const hamburger = document.querySelector(".hamburger-menu");
        function likeArt() {
            alert("Liked!");
        }

        function shareArt() {
            alert("Shared!");
        }
        $('.hamburger-menu').click(function() {
            $('#menu').toggleClass('open');
            $(this).toggleClass('active');  // Use `this` for the clicked element
          });


        const isScrollingDown = () => {
            const scrollDir = $(window).scrollTop() > $(window).data('prevScrollPos');
            $(window).data('prevScrollPos', $(window).scrollTop());
            return scrollDir;
          };
          
          $(window).scroll(function() {
            if (isScrollingDown()) {
              // Remove "open" and "active" classes here
              $("#menu").removeClass("open");
              $(".hamburger-menu").removeClass("active");
            }
          });

// Using jQuery:
$(document).ready(function() {
    $('.menu-item .icon').click(function() {
      const parent = $(this).parent();
      const link = parent.find('.hidden-link');
  
      if (parent.hasClass('active')) {
        parent.removeClass('active');
        link.slideUp();
      } else {
        parent.addClass('active');
        link.slideDown();
      }
    });
  });
  

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}
 /* 
$(document).ready(function() {
  $('.card-content img').hover(function() {
    // Create the overlay div
    var overlayDiv = $('<div class="card-overlay"></div>');

    // Add icons (adjust paths and classes as needed)
    overlayDiv.append('<i class="fa-sharp fa-solid fa-heart heart-icon" style="color: #ff1100;"></i>');
    overlayDiv.append('<i class="fa-solid fa-download download-icon" style ="color:#ffffff;"></i>');
    overlayDiv.append('<img class="profile-photo" src="F:/web_main/pexels-mikhail-nilov-8350616.jpg"" alt="Profile photo">');
    overlayDiv.append('<i class="fa-solid fa-share-nodes share-icon" style="color:#ffffff;"></i>');

    // Style the overlay div (adjust positioning and styles as needed)
    overlayDiv.css({
      position: 'relative',
      top: '-280px',
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      opacity: 1,
      transition: 'opacity 0.3s ease-in-out',
      padding: '8px' ,
    });

    // Append the overlay div to the card
    $(this).parent().append(overlayDiv);

    // Show the overlay on hover
    overlayDiv.hover(function() {
      $(this).css('opacity', 1);
    }, function() {
      $(this).css('opacity', 0);
    });
  }, function() {
    // Remove the overlay on mouseleave
    $(this).parent().find('.card-overlay').remove();
  });
});*/
  
            