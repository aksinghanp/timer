      let hrs=document.getElementById("hours");
      let mins = document.getElementById("minutes");
      let secs = document.getElementById("seconds");
      let display = document.getElementById("display");
      let start = document.getElementById("start");
      var audio = new Audio("tom-2.mp3");
      let timer;

      function displaymin() {
        display.innerHTML = (hrs.value > 9 ? hrs.value : "0" + hrs.value)+
          ":"+
          (mins.value > 9 ? mins.value : "0" + mins.value) +
          ":" +
          (secs.value > 9 ? secs.value : "0" + secs.value);
      }

      function watch() {
        start.disabled = true;//the start button will be disabled once the timer starts
        hrs.disabled=true;
        mins.disabled = true;
        secs.disabled = true;
        var date1 = new Date();//today's date
        var countDownDate = new Date(); //time from which the countdown will start
        countDownDate.setTime(
          date1.getTime() +
            hours.value*60*60*1000+
            minutes.value * 60 * 1000 +
            seconds.value * 1000 +
            1 * 1000
        );

        if(display.innerHTML=="00:00:00"){
            audio.play();
            alert("Time Over");
            return;
        }

        // Update the count down every 1 second
        var x=setInterval(function () {
          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for minutes and seconds
          var hours=Math.floor((distance % (1000*24*60*60)) / (1000 *60*60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="display"
          display.innerHTML =
           (hours > 9 ? hours : "0" + hours)+
            ":"+
            (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds);

          // If the count down is finished, play audio file
          if (display.innerHTML == "00:00:00") {
            audio.play();
            alert("Time Over");
            clearInterval(x);
          }
        }, 1000);
      }
      