var self;
var Clock = function(){
  self = this;
 

}

Clock.prototype = {
  startClock: function(){
    var time = new Date;
    
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    
      hours.innerText = time.getHours();
      minutes.innerText = time.getMinutes();
      seconds.innerText = time.getSeconds();
      
    setTimeout(self.startClock, 1000);
    


  }
}

module.exports = Clock;