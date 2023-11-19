    function toggleFeaturesDropdown(isMobile) {
      const m = isMobile ? 'M' : '';
      const dropdown = document.getElementById('featuresContent'+ m);
      dropdown.classList.toggle("show");
      const upFIcon = document.querySelector('.upF' + m);
      const downFIcon = document.querySelector('.downF' + m);
      upFIcon.classList.toggle('visible1');
      downFIcon.classList.toggle('visible');
    }

    function toggleCompanyDropdown(isMobile) {
      const m = isMobile ? 'M' : '';
      const dropdown = document.getElementById('companyContent'+ m);
      dropdown.classList.toggle("show");
      const upCIcon = document.querySelector('.upC' + m);
      const downCIcon = document.querySelector('.downC' + m);
      upCIcon.classList.toggle('visible1');
      downCIcon.classList.toggle('visible');
    }

    // Menutup dropdown jika pengguna mengklik di luar dropdown
    window.onclick = function (event) {
      if (!event.target.matches('.downF') && !event.target.matches('.upF') && !event.target.matches('.features') && !event.target.matches('.todo') && !event.target.matches('.calendar') && !event.target.matches('.reminder') && !event.target.matches('.planning') && !event.target.matches('.select')) {
        const dropdown = document.getElementById("featuresContent");
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
          const upFIcon = document.querySelector('.upF');
          const downFIcon = document.querySelector('.downF');
          upFIcon.classList.remove('visible');
          downFIcon.classList.add('visible');
        }
      }

      if (!event.target.matches('.downC') && !event.target.matches('.upC') && !event.target.matches('.company') && !event.target.matches('.history') && !event.target.matches('.team') && !event.target.matches('.blog') && !event.target.matches('.select')) {
        const dropdown = document.getElementById("companyContent");
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
          const upCIcon = document.querySelector('.upC');
          const downCIcon = document.querySelector('.downC');
          upCIcon.classList.remove('visible');
          downCIcon.classList.add('visible');
        }
      }
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

  function toggleCanvasCover() {
    var canvasCover = document.getElementById("canvasCover");
    canvasCover.style.display = (canvasCover.style.display === "block") ? "none" : "block";
  }

  function toggleFeaturesDropdown() {
    var dropdown = document.getElementById("featuresContentM");
    dropdown.classList.toggle("show");

    var upFIcon = document.querySelector('.upF');
    var downFIcon = document.querySelector('.downF');
    upFIcon.classList.toggle('visible');
    downFIcon.classList.toggle('visible');
  }

  function toggleCompanyDropdown() {
    var dropdown = document.getElementById("companyContentM");
    dropdown.classList.toggle("show");

    var upCIcon = document.querySelector('.upCM');
    var downCIcon = document.querySelector('.downCM');
    upCIcon.classList.toggle('visible');
    downCIcon.classList.toggle('visible');
  }
