var hr = document.getElementById(`hr`)
var min = document.getElementById(`min`)
var sec = document.getElementById(`sec`)
var mili = document.getElementById(`mili`)
var div1 = document.getElementById(`div1`)
var div_hr = document.getElementById(`div_hr`)
var div_min = document.getElementById(`div_min`)
var div_sec = document.getElementById(`div_sec`)
var div_mili = document.getElementById(`div_mili`)
var hours = 0
var minutes = 0
var second = 0
var milisecond = 0
var now;
var condition = false

function work() {
    now = setInterval(() => {
        if (condition == true) {
            ++milisecond
            if (milisecond == 100) {
                milisecond = 0
                ++second
                if (second >= 60) {
                    second = 0
                    ++minutes
                    if (minutes > 59) {
                        minutes = 0
                        ++hours
                    }
                }
            }

            hr.innerText = hours < 10 ? `0${hours} :` : `${hours} :`;
            min.innerText = minutes < 10 ? `0${minutes} :` : `${minutes} :`;
            sec.innerText = second < 10 ? `0${second} :` : `${second} :`;
            mili.innerText = milisecond < 10 ? `0${milisecond}` : `${milisecond}`;

        }


    }, 10)

}


function start() {
    if (condition == false) {
        condition = true
        work()
    }
}

function pause() {
    clearInterval(now)
    condition = false
}

function reset() {
    condition = false
    clearInterval(now)
    hours = 0
    minutes = 0
    second = 0
    milisecond = 0
    hr.innerText = `00 :`
    min.innerText = `00 :`
    sec.innerText = `00 :`
    mili.innerText = `00`
}

function double() {
    reset()
    div1.innerText = `Dont double click try again 🚫`
    setTimeout(() => {
        div1.style.display = `none`
    }, 3000);
    setTimeout(() => {
        reset()
    }, 3000);
}
