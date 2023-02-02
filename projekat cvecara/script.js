let inputprvi = document.getElementById ("prviInput");
let inputDrugi = document.getElementById ("drugiInput")
let inputTreci = document.getElementById ("treciInput");
let btnIzracunaj = document.getElementById("Izracunaj");
let izracunajCenu = document.getElementById("cena");
let izracunajCenu2 = document.getElementById("cena2");
let plusBomb=document.getElementById("plusBomb")
let plusCoko=document.getElementById("plusCoko")
let plusSamp=document.getElementById("plusSamp")

btnIzracunaj.addEventListener ("click", ()=>{

    let value1=inputprvi.value;
    let value2=inputDrugi.value;
    let value3=inputTreci.value;

    //// pokloni
    let inputPokloni = document.querySelectorAll ('input[name="pokloni"]');
    let pokloni=0;
    inputPokloni.forEach(input=>{
        if(input.checked ){
            pokloni+=500
            if(input.value == "bombonjera"){
                plusBomb.innerHTML = "+bombonjera"
            }
            else if(input.value == "sampanjac"){
                plusSamp.innerHTML = "+sampanjac"
            }
            else if(input.value == "cokolada"){
                plusCoko.innerHTML = "+cokolada"
            }
        }
      
    })
    /// porudzbina
    let inputPlacanje = document.getElementsByName('placanje');
    inputPlacanje.forEach(input => {
        let porudzbina= (value1*150)+(value2*120)+(value3*70)+pokloni
      
        if(input.checked){
            if(input.value == 'kartica' && porudzbina>2000){
                izracunajCenu2.innerHTML = porudzbina*0.9;
                izracunajCenu.innerHTML = porudzbina
            }       
            else {
                izracunajCenu.innerHTML = porudzbina
            }
        }  
    })

      /// slike
      if(value1 <= 10){
        for(let i=0;i<value1;i++){
                let slikaPrva = document.createElement ("img")
                slikaPrva.src = "slike/ruza.jpg"
                slikaPrva.style.width= "80px"
                document.getElementById("slika1").appendChild(slikaPrva)
            }
        }
        // iznad 10 slika-slika buketa
        else{
                let buketRuza = document.createElement ("img")
                buketRuza.src = "slike/BuketRuza.png"
                buketRuza.style.width = "80px"
                document.getElementById("buketRuza").appendChild(buketRuza)
            }
    
        if(value2<=10){    
        for(let i=0;i<value2;i++){
                let slikaDruga = document.createElement ("img");
                slikaDruga.src= "slike/ljiljan.jpg";
                slikaDruga.style.width="80px"
                document.getElementById("slika2").appendChild(slikaDruga)
            }
        }
        else{
            let buketLjiljan = document.createElement ("img")
            buketLjiljan.src = "slike/BuketLjiljan.png"
            buketLjiljan.style.width = "80px"
            document.getElementById("buketLjiljan").appendChild(buketLjiljan)
        }
    
        if(value3<=10){
        for(let i=0;i<value3;i++){
                let slikaTreca = document.createElement ("img")
                slikaTreca.src= "slike/gerber.png"
                slikaTreca.style.width = "80px"
                document.getElementById("slika3").appendChild(slikaTreca)
            }
        }
        else{
            let buketGerber= document.createElement ("img")
            buketGerber.src = "slike/BuketGerber.jpg"
            buketGerber.style.width = "80px"
            document.getElementById("buketGerber").appendChild(buketGerber)
        }
})
//reset
let btnReset = document.getElementById("Resetuj");
btnReset.addEventListener("click", ()=>{
    let forma= document.getElementById("forma")
    forma.removeChild(forma.lastElementChild)
    location.reload()
})

