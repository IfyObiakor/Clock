setInterval(function(){
    let sec = document.querySelector(".sec_hand")
    let min = document.querySelector(".min_hand")
    let hr = document.querySelector(".hour_hand")


    const datez = new Date();
    console.log(datez)
    const secondz = datez.getSeconds()/60;
    const minutez = (secondz + datez.getMinutes())/60;
    const hour = (minutez + datez.getHours())/12;

    sec.style.transform=`rotate(${secondz*360}deg)`
    min.style.transform=`rotate(${minutez*360}deg)`
    hr.style.transform=`rotate(${hour*360}deg)`


}, 1000)