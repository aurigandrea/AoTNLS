const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  window.onscroll = function () {
    myFunction()
  };

  const header = document.getElementById("myHeader");
  const sticky = header.offsetTop;

  function myFunction() {
    if (window.scrollY >= sticky) {
      header.classList.add("sticky");
      header.classList.remove("hidden");

    } else {
      header.classList.remove("sticky");
      header.classList.add("hidden");
    }
  }
}
