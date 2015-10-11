"use strict";
(function() {
    function modeRadioClickListener(e) {
        var selected = e.target.name;
        var interval = e.currentTarget.parentNode;
        var multiplicator = interval.querySelector(".multiplicator");
        var intensity = interval.querySelector(".intensity");

        console.log(interval);
        if (selected === "continuous") {
            multiplicator.classList.add("on");
            intensity.classList.remove("on");
        } else if (selected === "fixed") {
            intensity.classList.add("on");
            multiplicator.classList.remove("on");
        }
    }

    function init() {
        document.querySelector("paper-radio-group").addEventListener("change", modeRadioClickListener);
    }

    window.addEventListener("load", init);
})();
