//INDEX.HTML

//NAVIGACIJA

//niz linkova
var stranice=[{naslov: "Home", link: "index.html"},{naslov: "Contact", link: "contact.html"}, {naslov: "Author", link: "author.html"}]

//dinamicki ispis linkova
for(stranica of stranice){
    var linkovi=document.createElement("li");
    var anchor = document.createElement("a");
    anchor.href = stranica.link; 
    anchor.textContent = stranica.naslov;
    linkovi.appendChild(anchor);
    document.getElementById("list").appendChild(linkovi);
}

//responsive-hamburger funkcionalnost
$(document).ready(function(){
    $("#nav-btn").click(function(){
        $("#nav-list").slideToggle(); 

    });
});



//COVER



//hover funkcinalnost i dinamicki ispis sadrzaja
if(document.getElementById("cover")){
    var tekst=document.createElement("p");
    tekst.textContent = "red jade gemstone with white saphire";
    document.getElementById("heart").appendChild(tekst);
    tekst.id="tekst";

    var tekst2=document.createElement("p");
    tekst2.textContent = "18-karat yellow gold, 18 inch cable-link chain";
    document.getElementById("chain").appendChild(tekst2);
    tekst2.id="tekst2";

    $(document).ready(function(){
        $("#heart").hover(function(){
            $("#tekst").slideToggle(); 

        });
    });
    $(document).ready(function(){
        $("#chain").hover(function(){
            $("#tekst2").slideToggle(); 

        });
    });
}



//MAIN


//niz slika
var slike_necklace=[{src:"assets/img/necklaces/necklace1.jpg", alt:"Black Swan Necklace", price: "50$"},{src:"assets/img/necklaces/necklace2.jpg", alt:"Three Raindrops Necklace", price: "65$"},{src:"assets/img/necklaces/necklace3.jpg", alt:"Stormy Gold Necklace", price: "70$"}];

var slike_ring=[{src:"assets/img/rings/ring1.jpg", alt:"Gold Crown Ring", price: "40$"},{src:"assets/img/rings/ring2.jpg", alt:"White Dove Ring", price: "52$"},{src:"assets/img/rings/ring3.jpg", alt:"Rose Saphire Ring", price: "67$"}];

//pri ucitavanju-random izabrane slike iz niza
if(document.getElementById("jcc")){
    var textN=document.createElement("figcaption");
    var textR=document.createElement("figcaption");
    document.getElementById("necklacef").appendChild(textN);
    document.getElementById("ringf").appendChild(textR);

    window.addEventListener("load", function(){
        var br_necklace= Math.floor(Math.random() * slike_necklace.length);
        var br_ring= Math.floor(Math.random() * slike_ring.length);

        document.getElementById("necklace").alt=slike_necklace[br_necklace].alt
        document.getElementById("necklace").src=slike_necklace[br_necklace].src

        document.getElementById("ring").alt=slike_ring[br_ring].alt
        document.getElementById("ring").src=slike_ring[br_ring].src

        textN.textContent = slike_necklace[br_necklace].alt +" - "+ slike_necklace[br_necklace].price;
        textR.textContent = slike_ring[br_ring].alt +" - "+ slike_ring[br_ring].price;

    })
}



//SLIDER


//niz slika
var slajderN=[{src:"assets/img/necklaces/slika1.jpg", alt:"Sea Shell Necklace", price:"52$"},{src:"assets/img/necklaces/slika2.jpg", alt:"Emerald Necklace", price:"58$"},{src:"assets/img/necklaces/slika3.jpg", alt:"Ruby Heart Necklace", price:"75$"},{src:"assets/img/necklaces/slika4.jpg", alt:"Dark Titanium Necklace", price:"82$"}];

var slajderR=[{src:"assets/img/rings/slika1.jpg", alt:"Sea Shell Ring", price:"50$"},{src:"assets/img/rings/slika2.jpg", alt:"Emerald Ring", price:"49$"},{src:"assets/img/rings/slika3.jpg", alt:"Ruby Heart Ring", price:"57$"},{src:"assets/img/rings/slika4.jpg", alt:"Dark Titanium Ring", price:"64$"}];

//unos slika u slajdere
if(document.getElementById("block1")){
    for(element of slajderN){
        var elN=document.createElement("div");
        elN.classList.add("carousel-item", "w-100");
        var elNN=document.createElement("img");
        elNN.src=element.src;
        elNN.alt=element.alt;
        elN.appendChild(elNN);
        elNN.classList.add("d-block", "w-100");
        document.getElementById("carousel-id").appendChild(elN);
        if(element==slajderN[0]){
            elN.classList.add("active");
        }
    }

    for(element of slajderR){
        var elR=document.createElement("div");
        elR.classList.add("carousel-item", "w-100");
        var elRR=document.createElement("img");
        elRR.src=element.src;
        elRR.alt=element.alt;
        elR.appendChild(elRR);
        elRR.classList.add("d-block", "w-100");
        document.getElementById("carousel-id1").appendChild(elR);
        if(element==slajderR[0]){
            elR.classList.add("active");
        }
    }
}



// TIMER


//niz slika
var niz_slikaN=[{src:"assets/img/necklaces/slika5.jpg", alt:"Two Faced Necklace", price:"52$", type:"gold"},{src:"assets/img/necklaces/slika6.jpg", alt:"Rainbow Necklace", price:"58$", type:"silver"},{src:"assets/img/necklaces/slika7.jpg", alt:"Pearl Mirror Necklace", price:"35$", type:"gold"},{src:"assets/img/necklaces/slika8.jpg", alt:"Snow White Necklace", price:"53$", type:"silver"},{src:"assets/img/necklaces/slika9.jpg", alt:"Cleopatra Necklace", price:"42$", type:"silver"},{src:"assets/img/necklaces/slika10.jpg", alt:"Love Locket Necklace", price:"79$", type:"gold"}];

var niz_slikaR=[{src:"assets/img/rings/slika3.jpg", alt:"Queen Of Hearts Ring", price:"52$", type:"silver"},{src:"assets/img/rings/slika4.jpg", alt:"Snow Beauty Ring", price:"38$", type:"silver"},{src:"assets/img/rings/ring1.jpg", alt:"Kingdom Ring", price:"45$", type:"gold"},{src:"assets/img/rings/ring2.jpg", alt:"Radiant Ring", price:"32$", type:"silver"},{src:"assets/img/rings/ring3.jpg", alt:"Rose Saphire Ring", price:"22$", type:"silver"},{src:"assets/img/rings/ring4.jpg", alt:"Princess Ring", price:"52$", type:"gold"}];


//funkcija za timer
function updateCountdown() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 1, 0, 1); 
  
    const timeDifference = targetDate.getTime() - today.getTime();
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      return;
    }
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    saleTime.textContent = `Ends in: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

//funckija za brisanje svih elemenata
function brisanje(container){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

//funkcija za unos svih elemenata
function sviElementi(){
    for(element of niz_slikaN){
        var slN=document.createElement("figure");
        slN.classList.add("col-md-6", "col-lg-3", "col-11");
        var slNN=document.createElement("img");
        slNN.src=element.src;
        slNN.alt=element.alt;
        slN.appendChild(slNN);
        slNN.classList.add("w-100", "roundedSlika");
        var slNNN=document.createElement("figcaption");
        slNNN.textContent=element.alt + " - " + element.price;
        slN.appendChild(slNNN);
        document.getElementById("niz_slika").appendChild(slN);
    }
    for(element of niz_slikaR){
        var slR=document.createElement("figure");
        slR.classList.add("col-md-6", "col-lg-3", "col-11");
        var slRR=document.createElement("img");
        slRR.src=element.src;
        slRR.alt=element.alt;
        slR.appendChild(slRR);
        slRR.classList.add("w-100", "roundedSlika");
        var slRRR=document.createElement("figcaption");
        slRRR.textContent=element.alt + " - " + element.price;
        slR.appendChild(slRRR);
        document.getElementById("niz_slika").appendChild(slR);
    }
}

//funkcija za selekciju
function selekcija(elementT, niz1, niz2){
    var niz1F=niz1.filter((item) => item.type===elementT);
    var niz2F=niz2.filter((item) => item.type===elementT);

    for(element of niz1F){
        var slN=document.createElement("figure");
        slN.classList.add("col-md-6", "col-lg-3", "col-11");
        var slNN=document.createElement("img");
        slNN.src=element.src;
        slNN.alt=element.alt;
        slN.appendChild(slNN);
        slNN.classList.add("w-100", "roundedSlika");
        var slNNN=document.createElement("figcaption");
        slNNN.textContent=element.alt + " - " + element.price;
        slN.appendChild(slNNN);
        document.getElementById("niz_slika").appendChild(slN);
    }
    for(element1 of niz2F){
        var slR=document.createElement("figure");
        slR.classList.add("col-md-6", "col-lg-3", "col-11");
        var slRR=document.createElement("img");
        slRR.src=element1.src;
        slRR.alt=element1.alt;
        slR.appendChild(slRR);
        slRR.classList.add("w-100", "roundedSlika");
        var slRRR=document.createElement("figcaption");
        slRRR.textContent=element1.alt + " - " + element1.price;
        slR.appendChild(slRRR);
        document.getElementById("niz_slika").appendChild(slR);
    }
}


//kreiranje blokova
if(document.getElementById("block2")){

    var sale=document.createElement("div");
    sale.classList.add("w-100", "bg-main");

    var saleText= document.createElement("p");
    saleText.classList.add("text-center");
    saleText.textContent="New Years Sale On Our Classics";

    var saleTime= document.createElement("p");
    saleTime.classList.add("text-center");
    saleTime.id="time";

    sale.appendChild(saleText);
    sale.appendChild(saleTime);
    document.getElementById("saleT").appendChild(sale);

  
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
  

    //buttons-kreiranje
    var btn_all=document.createElement("input");
    var btn_gold=document.createElement("input");
    var btn_silver=document.createElement("input");

    btn_all.type="button";
    btn_gold.type="button";
    btn_silver.type="button";

    btn_all.value="All";
    btn_gold.value="Gold";
    btn_silver.value="Silver";


    document.getElementById("btn-select").appendChild(btn_all);
    document.getElementById("btn-select").appendChild(btn_gold);
    document.getElementById("btn-select").appendChild(btn_silver);

    //pri ucitavanju, ispis svih elemenata
    window.addEventListener("load", sviElementi());
  
    //elementi selektivni ispis
    btn_all.addEventListener("click", function(){
        brisanje(document.getElementById("niz_slika"));
        sviElementi();
    })
    btn_gold.addEventListener("click", function(){
        brisanje(document.getElementById("niz_slika"));
        selekcija("gold",niz_slikaN, niz_slikaR);
    })

    btn_silver.addEventListener("click", function(){
        brisanje(document.getElementById("niz_slika"));
        selekcija("silver",niz_slikaN, niz_slikaR);
    })
}
  

//FOOTER


//niz ikonica
var footerSocials=[{icon: "<i class=\"fa-brands fa-facebook-f\"><\/i>", href: "www.facebook.com"}, {icon: "<i class=\"fa-brands fa-instagram\"><\/i>", href: "www.instagram.com"}, {icon: "<i class=\"fa-brands fa-x-twitter\"><\/i>", href: "www.x.com"}];

var footerDoc=[{icon: "<i class=\"fa-regular fa-file\"><\/i>", href: "www.facebook.com"}, {icon: "<i class=\"fa-solid fa-sitemap\"><\/i>", href: "www.instagram.com"}];

//kreiranje futera i ucitavanje sadrzaja
window.addEventListener("load", function(){

    var divSocials= document.createElement("div");
    var divDoc= document.createElement("div");
    var divLogo= document.createElement("div");
    divSocials.classList.add("col-4");
    divDoc.classList.add("col-4");
    divLogo.classList.add("col-4");

    var ime=document.createElement("p");
    ime.textContent="Socials: ";
    
    var ime1=document.createElement("p");
    ime1.textContent="Docs: ";

    function futerBlok(niz,ime){
            for(element of niz){
                let link=document.createElement("a");
                link.classList.add("text-decoration-none", "m-1", "mainC");
                link.innerHTML=element.icon;
                link.href=element.href;
                ime.appendChild(link);
            }
    }
    futerBlok(footerSocials, ime);
    divSocials.appendChild(ime);
    futerBlok(footerDoc, ime1);
    divDoc.appendChild(ime1);

    var linkLogo=document.createElement("a");
    linkLogo.href="index.html";
    linkLogo.classList.add("text-decoration-none", "m-1");
    var logoF=document.createElement("img");
    logoF.src="assets/img/logo.png";
    logoF.alt="logo";
    logoF.style.width="40px";
    linkLogo.appendChild(logoF);
    divLogo.appendChild(linkLogo);


    document.getElementById("futer").appendChild(divSocials);
    document.getElementById("futer").appendChild(divLogo);
    document.getElementById("futer").appendChild(divDoc);

})


//CONTACT


//kreiranje elemenata
if(document.getElementById("tekstForma")){
    var objImg1={src: "assets/img/necklaces1.png", alt: "necklaces"};
    var objImg2={src: "assets/img/necklaces2.png", alt: "necklaces"};

    var tekstFormaBlok1= document.createElement("div");
    tekstFormaBlok1.classList.add("col-12");
    var tekstFormaP1= document.createElement("p");
    tekstFormaP1.id="formaP";
    tekstFormaP1.textContent="Here is a quiz-style form to help you find your dream jewelry!";
    tekstFormaBlok1.appendChild(tekstFormaP1);

    var tekstFormaBlok2= document.createElement("div");
    tekstFormaBlok2.classList.add("col-12");
    var tekstFormaP2= document.createElement("p");
    tekstFormaP2.textContent="Share your preferences, and let us assist you in discovering the jewelry that complements your distinct charm.";
    tekstFormaBlok2.appendChild(tekstFormaP2);

    var tekstFormaBlok3= document.createElement("div");
    tekstFormaBlok3.classList.add("col-11");
    var tekstFormaImg= document.createElement("img");
    tekstFormaImg.alt=objImg1.alt;
    tekstFormaImg.src=objImg1.src;
    tekstFormaImg.classList.add("w-100");
    tekstFormaBlok3.appendChild(tekstFormaImg);

    var tekstFormaBlok4= document.createElement("div");
    tekstFormaBlok4.classList.add("col-11");
    var tekstFormaImg1= document.createElement("img");
    tekstFormaImg1.alt=objImg2.alt;
    tekstFormaImg1.src=objImg2.src;
    tekstFormaImg1.classList.add("w-100");
    tekstFormaBlok4.appendChild(tekstFormaImg1);

    document.getElementById("tekstForma").appendChild(tekstFormaBlok1);
    document.getElementById("tekstForma").appendChild(tekstFormaBlok3);
    document.getElementById("tekstForma").appendChild(tekstFormaBlok2);
    document.getElementById("tekstForma").appendChild(tekstFormaBlok4);
}
 



//<option value id>sadrzaj</option>

//dinamicki unos za dropdown listu i checkbox
var chbox=[{id:"ruby", labelName: "Ruby"},{id:"emerald", labelName: "Emerald"}, {id:"saphire", labelName: "Saphire"}, {id:"amethyst", labelName: "Amethyst"}, {id:"jade", labelName: "Jade"}, {id:"jasper", labelName: "Jasper"}, {id:"diamond", labelName: "Diamond"}, {id:"opal", labelName: "Opal"}, {id:"amber", labelName: "Amber"}];

var ddl=[{id:"modern", value: "Modern"}, {id:"minimalist", value: "Minimalist"}, {id:"vintage", value: "Vintage"}, {id:"boho", value: "Boho"}];

//funkcija za checkbox
function unosCh(){
    for(element of chbox){
        let elCh= document.createElement("div");
        elCh.classList.add("col-lg-4", "col-6");
        let InCh= document.createElement("input");
        InCh.type="checkbox";
        InCh.id=element.id;
        let laCh= document.createElement("label");
        laCh.htmlFor=element.id;
        laCh.textContent=element.labelName;
        elCh.appendChild(InCh);
        elCh.appendChild(laCh);
        document.getElementById("checkGem").appendChild(elCh);
    }
}

//funkcija za dropdown listu
function unosDdl(){
    for(element of ddl){
        let elDdl= document.createElement("option");
        elDdl.value=element.value;
        elDdl.id=element.id;
        elDdl.textContent=element.value;
        document.getElementById("style").appendChild(elDdl);
    }
}

if(document.getElementById("forma")){
    unosCh();
    unosDdl();
}

//expandable menu
if(document.getElementById("questions")){
    $(document).ready(function(){
        $( '#menu > li > ul' )
            .hide()
            .click(function( e ){
                e.stopPropagation();
            });
            $('#menu > li > a').click(function (e) {
                e.preventDefault();
                var $submenu = $(this).siblings('ul');
                $submenu.slideToggle();
            });
    });
}

  //plug-in jquery Scroll-Up button 
  $(document).ready(function() {
    $('#scrollUp').click(function() {
      $.scrollTo(0, 100); 
    });
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#scrollUp').fadeIn();
      } else {
        $('#scrollUp').fadeOut();
      }
    });
  });
 

  //form validation

  var regExImePrezime =/^[A-ZŠĐŽĆČ][a-zžđšćč]{1,}(\s[A-ZŠĐŽĆČ][a-zžđšćč]{1,})*/;
  var regExMejl =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var fName=document.getElementById("fName");
  var ime=document.getElementById("ime");
  var prezime=document.getElementById("prezime");
  submit.disabled=true;
  

  if(document.getElementById("forma")){

    //ime
    var mess = document.createElement("p");
    mess.textContent="At least 2 letters with the capital first letter.";
    mess.classList.add("p-message");
    ime.appendChild(mess);
    mess.classList.add("d-none");

    fName.addEventListener("change", function(){
        if(!regExImePrezime.test(fName.value)){
            mess.classList.remove("d-none");
            }
        else{
                mess.classList.add("d-none");
                
        }
    })

    //prezime
    var mess1 = document.createElement("p");
    mess1.textContent="At least 2 letters with the capital first letter.";
    prezime.appendChild(mess1);
    mess1.classList.add("p-message");
    mess1.classList.add("d-none");

    lName.addEventListener("change", function(){
        if(!regExImePrezime.test(lName.value)){
            mess1.classList.remove("d-none");
            }
        else{
                mess1.classList.add("d-none");
                
        }
    })

    //mejl
    var mess2 = document.createElement("p");
    mess2.textContent="Needs usual format of a mail.";
    mejl.appendChild(mess2);
    mess2.classList.add("d-none");
    mess2.classList.add("p-message");

    mail.addEventListener("change", function(){
        if(!regExMejl.test(mail.value)){
            mess2.classList.remove("d-none");
            }
        else{
                mess2.classList.add("d-none");
                
        }
    })

    //style
    var mess3 = document.createElement("p");
    mess3.textContent="Style has to be selected.";
    stil.appendChild(mess3);
    mess3.classList.add("p-message");
    mess3.classList.add("d-none");

    style.addEventListener("change", function(){
        if(style.selectedIndex==0){
            mess3.classList.remove("d-none");
        }
        else{
            mess3.classList.add("d-none");
        }
    })

    //button disabled 
    forma.addEventListener("change", function(){
        if(style.selectedIndex!=0 && regExMejl.test(mail.value) && regExImePrezime.test(fName.value) && regExImePrezime.test(lName.value)){
            submit.disabled=false;
        }
        else{
            submit.disabled=true;
        }
    })

  }

 

 