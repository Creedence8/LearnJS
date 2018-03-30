/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
 module.exports = function (hours, minutes, interval) {
     if (hours < 24 && hours>=0) {
         if (minutes>=0 && minutes<60) {
             h = Math.floor((hours*60+minutes+interval)/60);
             h2 = h>=24 ? h-24 : h;
             m = (hours*60+minutes+interval)%60;
            return  update(h2) +":" + update(m);
         }
     }
     return false;
 };

 function update (foo) {
     if (foo<10) {foo='0'+foo;}
     return foo;
 }
