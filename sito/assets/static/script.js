function mobile_center_active() {
    var nav = document.querySelector("nav");
    var active = nav.querySelector(".active");

    var offset = active.getBoundingClientRect().left;
    nav.scrollBy(offset - window.innerWidth / 2 + active.offsetWidth / 2, 0);
}


function mobile_fix_navbar_size() {
    var nav = document.querySelector("nav");
    var wrapper = nav.querySelector("div.wrapper");

    // Store the original wrapper width on first call
    if (! wrapper.originalWidth) {
        wrapper.originalWidth = wrapper.offsetWidth
    }

    // Don't do anything on desktop
    if (nav.offsetWidth > wrapper.originalWidth) {
        wrapper.style.width = wrapper.originalWidth+"px";
        return;
    }

    var padding = parseInt(
        window.getComputedStyle(wrapper, null)
              .getPropertyValue("padding-left")
    );

    var total = padding * 2 + 1;
    var ul = document.querySelectorAll("nav ul");
    for (var i = 0; i < ul.length; i++) {
        total += ul[i].offsetWidth;
    }

    wrapper.style.width = total+"px";
}


function mobile_initialize() {
    mobile_fix_navbar_size();
    mobile_center_active();
}


mobile_initialize();

window.addEventListener("load", mobile_initialize);
window.addEventListener("resize", mobile_fix_navbar_size);
