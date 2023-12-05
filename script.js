let butonlar = document.getElementById("buttons");
let ekran = document.getElementById("sonuc");


let ekranDeger = "0";
let ilkDeger;
let ikinciDeger;



updateEkran()
function updateEkran(){
    ekran.value = ekranDeger;
}

butonlar.addEventListener("click",function(e){
    let element = e.target;

    if(!element.matches("button")){
        return; // aşağıdaki kodları çalıştırma ve boş dön diyoruz
    }


    if(element.classList.contains("operator")){
        // console.log("that is a operator",element.value)
        if(element.value === "+"){
            toplama();
        }
        return;//değer olarak bunu dön ve aşağıdaki kodları çalıştırma;
    }

    if(element.classList.contains("clear")){
        temizle();
        updateEkran()
        return;
    }

    if(element.classList.contains("equals")){
        console.log("equals",element.value);
        return;
    }

    if(element.classList.contains("decimel")){
        decimel();
        updateEkran();
        return;
    }

    let sayı = element.value;
    ekrandaGoster(sayı)
    updateEkran()
});


function decimel(){
    if(!ekranDeger.includes(".")){
        ekranDeger = ekranDeger + ".";
    }
}

function ekrandaGoster(sayı){
    // ekranDeger = sayı;

    // ekranDeger = ekranDeger === "0" ? sayı : ekranDeger + sayı
    if(ekranDeger === "0"){
        ekranDeger = sayı;
    }else{
        ekranDeger = ekranDeger + sayı;
    }

}

// function operators(){
//     let artı = document.getElementById("artı").value;
//     ilkDeger = ekranDeger;
//     ekranDeger =  "0";
//     updateEkran()
//     console.log(ilkDeger)
// }

function toplama(){
    ilkDeger = ekranDeger;
    ekranDeger =  "0";
    updateEkran()
    console.log(toplam);  
}

function temizle(){
    ekranDeger = "0";
}


