function searchDonors() {
    const bloodGroup = document.getElementById("bloodGroup").value;
    const district = document.getElementById("district").value;
    alert(`Searching for ${bloodGroup} donors in ${district}`);
  }
  
// navigation bar responsive
  // const menuToggle = document.getElementById('mobile-menu');
  // const navLinks = document.querySelector('.nav-links');
  // const authButtons = document.querySelector('.auth-buttons');

  // menuToggle.addEventListener('click', () => {
  //   navLinks.classList.toggle('active');
  //   authButtons.classList.toggle('active');
  // });

  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
