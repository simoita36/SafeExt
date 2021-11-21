// Definizione della funzione "play"
function play() {
  alert('hello! this is message');
  // Qui puoi eseguire il codice che ti serve

  /*//Clicco Aule Studio
  document.querySelector('#AULE').click();

  //Clicco Orario dalle 14-17
  const links = document.querySelectorAll('a[href="https://us-central1-eiloborg.cloudfunctions.net/s4aweb?token=s278178&c=9f8f1a47-f6eb-4845-b042-f6da7c25f0fb4fed8b03ee613c4d5781cd8cf35ded13&f=12b&v1=14.00&v5=20211119"]');
  for(let i = 0; i < links.length; i++) {
    links[i].click();
  }


  //Clicco Piazziale Europa EDIFICIO
  document.querySelector('#EDIFICIO').click();

  //Clicco l'aula 2g
  const spazio = document.querySelectorAll('a[href="https://us-central1-eiloborg.cloudfunctions.net/s4aweb?token=s278178&c=9f8f1a47-f6eb-4845-b042-f6da7c25f0fb4fed8b03ee613c4d5781cd8cf35ded13&f=12d&v1=14.00&v2=ED1&v3=Edificio H3 SPAZIO STUDIO 2 g piano 4&v4=SER32&v5=20211119&v6="]');
  for(let i = 0; i < spazio.length; i++) {
    spazio[i].click();
  }

  //Clicco Prenota
  document.querySelector('#PRENOTA_de').click();

  //Clicco Grazie
  document.querySelector('#GRAZIE').click();*/
}

// Definizione della funzione "init" che viene eseguita al caricamento della pagina
function init() {
  // Seleziono il bottone "play" tramite ID (id=play)
  const playButton = document.querySelector('#play'); // equivale alla riga sotto, ma con la modalità più "moderna"
// const playButton = document.getElementById('play');

// Rimango in ascolto dell'evento "click" ed eseguo la funzione "play" quando viene lanciato l'evento
  playButton.addEventListener('click', play);
}

