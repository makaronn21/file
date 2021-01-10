(function ($) {
    $(document).ready(function () {
        var audio = new Audio();
        audio.loop = false;
        audio.volume = 0.5;
        document.getElementById('audio1').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Colorful.mp3";
            audio.currentTime = 1;
            audio.play();
        });

        document.getElementById('audio2').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Rubber Human.mp3";
            audio.currentTime = 0.5;
            audio.play();
        });

        document.getElementById('audio3').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/RTRT.mp3";
            audio.currentTime = 0;
            audio.play();
        });

        document.getElementById('audio4').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Witch's Invitation.mp3";
            audio.currentTime = 0.7;
            audio.play();
        });
        document.getElementById('audio5').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Imagined Flight.mp3";
            audio.currentTime = 1;
            audio.play();
        });
        document.getElementById('audio6').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Summoning 101.mp3";
            audio.currentTime = 3;
            audio.play();
        });
        document.getElementById('audio7').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Bathtub Mermaid.mp3";
            audio.currentTime = 4.2;
            audio.play();
        });
        document.getElementById('audio8').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Opium.mp3";
            audio.currentTime = 2;
            audio.play();
        });
        document.getElementById('audio11').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Phantomcat of Meowloween.mp3";
            audio.currentTime = 0.2;
            audio.play();
        });
        document.getElementById('audio10').addEventListener("click", function (e) {
            e.preventDefault();
            audio.src = "../audio/Space Colony.mp3";
            audio.currentTime = 0.2;
            audio.play();
        });

        document.getElementById('StopAudio').addEventListener("click", function (e) {
            e.preventDefault();
            audio.currentTime = 0;
            audio.pause();
        });
    });
})(jQuery);
