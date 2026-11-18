function showDetails(type){
    const details = {
        kosnice: {
            title: "Broj košnica 60",
            text: "Obiteljsko pčelarsko gospodarstvo broji prosječno 60 košnica, a sve su iste vrste, što omogućuje standardiziranu i učinkovitu brigu o pčelama. Tijekom godine broj košnica može varirati zbog izazova poput bolesti pčela, koji su česti u pčelarskoj praksi. Uz stručno praćenje stanja pčelinjih zajednica i primjenu preventivnih mjera, gospodarstvo uspijeva održati stabilan prosjek. Svaka košnica pažljivo je smještena i održavana kako bi se osigurala optimalna produktivnost i zdravlje pčela, što je ključ uspjeha gospodarstva.",
            image: "../Images/bee-house.png"
        },
        
        lokacije: {
            title: "Smješteni na 2 lokacije",
            text: "Košnice su raspoređene na dvije lokacije koje se međusobno nadopunjuju i pružaju raznovrsnu pašu za pčele. Prva lokacija nalazi se u šljiviku obiteljske kuće unutar sela, što osigurava sigurnost i lakoću nadzora. Druga lokacija smještena je na kupljenom zemljištu u susjednom selu, malo izvan naselja, gdje pčele imaju pristup čistoj prirodi i bogatoj flori. Kombinacija ovih lokacija omogućuje proizvodnju različitih vrsta meda, a pažljivo odabrano okruženje osigurava visoku kvalitetu proizvoda.",
            image: "../Images/locations.png",
        },

        med: {
            title: "Godišnje 1.5 tona meda",
            text: "Godišnja proizvodnja iznosi oko 1.5 tone meda, a vrste meda uključuju suncokretov, uljane repice, bagremov, šumski i cvjetni med. Ove vrste specifične su za područje Vukovarsko-srijemske županije, koje obiluje raznovrsnom florom potrebnom za pčelinju pašu. Količina i vrsta meda ovise o klimatskim uvjetima, a svaki proizvod odražava trud i brigu uložen u održavanje zdravih pčelinjih zajednica. Uz med, gospodarstvo nudi i druge proizvode poput propolisa, pčelinjeg voska i peluda, čime se dodatno obogaćuje ponuda.",
            image: "../Images/honey.png",
        },

        clanovi: {
            title: "Od početka 5 članova",
            text: "Cijela obitelj Sučić uključena je u rad gospodarstva, a svaki član doprinosi svojim znanjem i vještinama. Roditelji su odgovorni za svakodnevnu brigu o pčelama, od održavanja košnica do osiguravanja zdravlja pčelinjih zajednica. Kćeri preuzimaju ključnu ulogu u procesu vrcanja meda, gdje se pažljivo rukuje svakom fazom kako bi se očuvala njegova kvaliteta. Prodaja meda i drugih proizvoda zajednički je napor svih članova, a kroz timski rad obitelj uspješno vodi gospodarstvo i gradi povjerenje svojih kupaca.",
            image: "../Images/family.png",
        },
        
        osnovano: {
            title: "Gospodarstvo osnovano 2013. godine",
            text: "Obiteljsko pčelarsko gospodarstvo Sučić osnovano je 2013. godine kao novo iskustvo koje su pokrenuli roditelji, vođeni ljubavlju prema prirodi i željom da stvore nešto svoje. Od početnih skromnih resursa, gospodarstvo se razvilo u ozbiljan pčelarski poduhvat koji se temelji na upornosti, učenju i predanosti. Svaka godina donosi nova znanja i izazove, ali i potvrdu da se uz zajedništvo može ostvariti održiv i uspješan posao.",
            image: "../Images/starting.png",
        },
    };

    const selectedDetails = details[type];


    document.getElementById("details-title").innerText = selectedDetails.title;
    document.getElementById("details-text").innerText = selectedDetails.text;

    const imageElement = document.getElementById("details-image");
    imageElement.src = selectedDetails.image;
}

window.onload = () =>{
    showDetails('kosnice');
}