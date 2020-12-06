/**Rastgele bir sayi uretilecek 1-10 arasi
 * Kullaniciya 4 hak taninacak
 * kullanici prompt ile sayiyi giricek
 * kullanici on veya arka gibi komutlarla yonlendirilicek
 * dogru bilen kullaniciya kac defada bildigi soylenicek
 * Puanlandirma yapilacak
 * 
 */
let hak = 4;
let guess, sayac = 0;
let number = Math.floor((Math.random() * 10) + 1);
console.log(number);


while (hak > 0) {
    //Kullanici her bilemediginde  hak 1 tane azalmasi gerekiyor
    hak--;
    sayac++;
    guess = Number(prompt("Vagon numarasi giriniz"))
    if (number == guess) {
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        //Bildigimiz soru hesaba katilmayacak o nedenle sayac-1
        console.log(`Puan: ${100-(25)*(sayac-1)}`);
        break;
    } else if (number > guess) {
        console.log("On Vagon");
    } else {
        console.log("Arka Vagon");
    }
    if (hak == 0) {
        console.log("Hakkiniz bitti");
    }
}



/* for (let hak = 3; hak >= 0; hak--) {
    sayac++;
    guess = Number(prompt("Vagon numarasi giriniz"))
    if (number == guess) {
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        //Bildigimiz soru hesaba katilmayacak o nedenle sayac-1
        console.log(`Puan: ${100-(25)*(sayac-1)}`);
        break;

    } else if (number > guess) {
        console.log("On Vagon");
    } else {
        console.log("Arka Vagon");
    }
    if (hak == 0) {
        console.log("Hakkiniz bitti");
    }
}   */