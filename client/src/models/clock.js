var self;

var Clock = function(){
  self = this;
  

}

Clock.prototype = {
  startClock: function(){
    var time = new Date;
    var offset = localStorage.getItem("offset");
    
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");

    var hoursInt = parseInt(time.getHours());
    var offsetInt = parseInt(offset);

    var offsetHours = hoursInt + offsetInt;
    
      hours.innerText = offsetHours.toString();
      minutes.innerText = time.getMinutes();
      seconds.innerText = time.getSeconds();
      
    setTimeout(self.startClock, 1000);
  
  }
}

module.exports = Clock;