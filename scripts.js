

document.addEventListener('DOMContentLoaded', function() {
    // Carousel
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
        indicators: true,
        duration: 300,
        numVisible: 5,
    });

    // Parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);

    // Btn emergente
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);

    // Video
    

        const video = document.getElementById('videoRex');
        
        document.getElementById("playV").addEventListener("click", playV);

        function playV() {
            video.play();
        }

});