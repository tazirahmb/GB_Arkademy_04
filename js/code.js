function isBentrok() {
    var no1 = document.getElementById("gor").value;
    var no2 = document.getElementById("pemkot").value;
    var kpk = 0;
    var hasil = ""
        
    if (no1 < no2) {  [no1, no2] = [no2, no1] }
        
    var i = 1;
    while(kpk == 0) {
        if((i * no1) % no2 == 0) {
            kpk = i * no1;
        }
        else {
            i++;
        }
    }
        
    hasil = "Pak Hasan bentrok mengajar setiap " + kpk + " hari sekali.";

    document.getElementById("result").innerHTML = hasil;
}

document.getElementById("check").addEventListener("click", isBentrok);