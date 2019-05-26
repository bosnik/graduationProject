function timer() {
    let deadline = '2019-12-18';

    function getTimeRemaning(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60))),
        days = Math.floor(t/(1000 * 60 * 60 * 24));

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaning(endtime);
                days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
               
        if (t.total <= 0 &&  t.days <= 0 && t.hours <= 0 & t.minutes <= 0 && t.seconds <= 0) {
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
                clearInterval(timeInterval);
            }else{
                days.textContent = ('0' + t.days).slice(-2);
                hours.textContent = ('0' + t.hours).slice(-2);
                minutes.textContent = ('0' + t.minutes).slice(-2);
                seconds.textContent = ('0' + t.seconds).slice(-2);
            }
        }
    }

    setClock('timer', deadline);
}    
    
module.exports = timer;