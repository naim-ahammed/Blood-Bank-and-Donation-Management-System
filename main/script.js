function searchDonors() {
    const bloodGroup = document.getElementById("bloodGroup").value;
    const district = document.getElementById("district").value;
    alert(`Searching for ${bloodGroup} donors in ${district}`);
  }
  
// Start navigation bar responsive
  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
//End navigation bar responsive

  
  //   <!-- Start Map View of Blood Banks -->

  const map = L.map('leafletMap').setView([23.685, 90.3563], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  const bloodBanks = [

    {
      name: 'Dhaka Blood Bank',
      location: [23.8103, 90.4125], // Dhaka Division
    },
    {
      name: 'Chittagong Blood Center',
      location: [22.3569, 91.7832], // Chattogram Division
    },
    {
      name: 'Rajshahi Medical Bank',
      location: [24.3745, 88.6042], // Rajshahi Division
    },
    {
      name: 'Khulna Blood Bank',
      location: [22.8456, 89.5403], // Khulna Division
    },
    {
      name: 'Barisal Blood Center',
      location: [22.7010, 90.3535], // Barisal Division
    },
    {
      name: 'Sylhet Blood Service',
      location: [24.8949, 91.8687], // Sylhet Division
    },
    {
      name: 'Rangpur Blood Bank',
      location: [25.7439, 89.2752], // Rangpur Division
    },
    {
      name: 'Mymensingh Blood Center',
      location: [24.7471, 90.4203], // Mymensingh Division
    },
  ];

  bloodBanks.forEach((bank) => {
    L.marker(bank.location)
      .addTo(map)
      .bindPopup(`<strong>${bank.name}</strong>`)
      .openPopup();
  });

  //   <!-- End Map View of Blood Banks -->
