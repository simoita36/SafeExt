function play() {
    alert('Safe is loading...');
        console.log("alert");
  
    //Clicco Aule Studio
    document.querySelector('#AULE').click();
        console.log("Seleziono Aule Studio");
    
    //Clicco Orario dalle 14-17
    const links = document.querySelectorAll('a[href="https://us-central1-eiloborg.cloudfunctions.net/s4aweb?token=s278178&c=9f8f1a47-f6eb-4845-b042-f6da7c25f0fb4fed8b03ee613c4d5781cd8cf35ded13&f=12b&v1=17.00&v5=20211125"]');
        for(let i = 0; i < links.length; i++) {
           links[i].click();
        };
    console.log("Seleziono l'orario");

    //Clicco Piazziale Europa EDIFICIO
    document.querySelector('#EDIFICIO').click();
        console.log("Seleziono l'Edificio");

    //Clicco l'aula 2g
    const spazio = document.querySelectorAll('a[href="https://us-central1-eiloborg.cloudfunctions.net/s4aweb?token=s278178&c=9f8f1a47-f6eb-4845-b042-f6da7c25f0fb4fed8b03ee613c4d5781cd8cf35ded13&f=12d&v1=17.00&v2=ED1&v3=Edificio H3 SPAZIO STUDIO 2 g piano 4&v4=SER32&v5=20211125&v6="]');
        for(let i = 0; i < spazio.length; i++) {
            spazio[i].click();
        }
    console.log("Seleziona l'Aula 2g");

    //Clicco Prenota
    document.querySelector('#PRENOTA_de').click();
        console.log("Prenoto");

    //Clicco Grazie
    document.querySelector('#GRAZIE').click();
        console.log("Graziee!");
    
}
    
    // Definizione della funzione "init" che viene eseguita al caricamento della pagina
    function init() {
    // Seleziono il bottone "play" tramite ID (id=play)
    const playButton = document.querySelector('#play'); // equivale alla riga sotto, ma con la modalità più "moderna"
    // const playButton = document.getElementById('play');

    // Rimango in ascolto dell'evento "click" ed eseguo la funzione "play" quando viene lanciato l'evento
    playButton.addEventListener('click', play);
    }
    init();