document.addEventListener("DOMContentLoaded", function() {
    var video;

    window.addEventListener("load", function() {
        console.log("Good job opening the window");
        video = document.getElementById("player1");
		video.autoplay = false;
		video.loop = false;
    });

    document.querySelector("#play").addEventListener("click", function() {
        // Play the video
        video.play();
		// var volume = document.getElementById("volume");
        console.log("Video is playing.");
		var slider = document.getElementById("slider");
		var volumePrint = document.getElementById("volume");
		slider.value = video.volume * 100;
		volume.textContent = Math.round(video.volume * 100) + "%";
    });

	document.querySelector("#pause").addEventListener("click", function() {
        // Pause the video
        video.pause();
        console.log("Video is paused.");
    });

	document.querySelector("#slower").addEventListener("click", function() {
        // Decrease speed by 10%
		video.playbackRate -= 0.1;
        console.log("Video is now playing at " + video.playbackRate + " percent of original");
    });

	document.querySelector("#faster").addEventListener("click", function() {
        // Increase speed by 10%
		video.playbackRate += 0.1;
        console.log("Video is now playing at " + video.playbackRate + " percent of original");
    });

	document.querySelector("#skip").addEventListener("click", function() {
        // Decrease speed by 10%
		video.currentTime += 10;
        console.log("Skipped 10 seconds to: " + video.currentTime);
    });

	document.querySelector("#mute").addEventListener("click", function() {
		if(video.muted == true){
			video.muted = false;
			console.log("Video unmuted.");
			mute.textContent = "Mute";
		}
		else {
			video.muted = true;
			console.log("Video muted.");
			mute.textContent = "Unmute";
		}
    });

	document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        volume.textContent = this.value + "%";
		console.log("Volume change to " + this.value);
    });

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool")
		console.log("Going oldSchool");
    });

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool")
		console.log("Back to original");
    });
});