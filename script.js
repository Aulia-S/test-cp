function showPosition(position) {
  let latlon = `${position.latitude},${position.longitude}`;

  let img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&sensor=false&key=YOUR_KEY`;

  document.getElementById("mapholder").innerHTML =
    "<img src='" + img_url + "'>";
}

if (window.innerWidth < 768) {
} else {
  // transition navbar bg
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (Math.round(this.scrollY) >= 625) {
      navbar.classList.remove("bg-nav-transparent");
      navbar.classList.remove("bg-first-nav");
      navbar.classList.add("bg-nav-solid");
    } else {
      navbar.classList.add("bg-nav-transparent");
      navbar.classList.remove("bg-nav-solid");
    }
  });
}
