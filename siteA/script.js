window.onload = function () {
  
  //header menu
  const menuList = document.querySelectorAll("#header > .menu > ul > li");
  menuList.forEach((menu) => {
    menu.addEventListener("mouseover", function () {
      this.querySelector(".subMenu").style.height = "130px";
    });
  });
  menuList.forEach((menu) => {
    menu.addEventListener("mouseout", function () {
      this.querySelector(".subMenu").style.height = "0px";
    });
  });

  //slider
  const imageList = document.querySelectorAll("#slider > .sliderWrap > .image");
  let currSlider = 0;
  imageList[currSlider].style.opacity = "1";  
  setInterval(() => {
    imageList[currSlider].style.opacity = "0";  
    currSlider = (currSlider + 1) % imageList.length;
    imageList[currSlider].style.opacity = "1";  
  }, 4000);

  //contents > tab table
  const tabList = document.querySelectorAll("#contents > .info > .info-menu > a");
  const contList = document.querySelectorAll("#contents > .info > .info-cont > ul");
  let currTab = 0;
  tabList.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      tabList[currTab].classList.remove("active");
      contList[currTab].classList.remove("active");
      currTab = idx;
      tabList[currTab].classList.add("active");
      contList[currTab].classList.add("active");
    });
  });

}