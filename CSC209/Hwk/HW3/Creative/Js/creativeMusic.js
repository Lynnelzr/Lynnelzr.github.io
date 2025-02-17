const slidesData = [
    { image: "Images/pan-xiaozhen-wXG5XF73o3w-unsplash.jpg", caption: "Welcome to Duffy's World" },
    { image: "Images/brandi-alexandra-Mvav3d0Ki2k-unsplash.jpg", caption: "Explore the Garden" },
    { image: "Images/rita-chou-21KlPS8bS20-unsplash.jpg", caption: "Adventure Awaits!" }
  ];
  window.onload = function() {
      generateSlideshow(slidesData);
      initSlideshow();
      
      // background Music Logic
      const music = document.getElementById('backgroundMusic');
      const musicControlBtn = document.getElementById('musicControlBtn');
      let isMusicPlaying = false;

      music.play();
      isMusicPlaying = true;
      musicControlBtn.innerText = 'Stop Music';

      musicControlBtn.addEventListener('click', function() {
          if (isMusicPlaying) {
              music.pause();
              musicControlBtn.innerText = 'Play Music';
          } else {
              music.play();
              musicControlBtn.innerText = 'Stop Music';
          }
          isMusicPlaying = !isMusicPlaying;
      });
  };
