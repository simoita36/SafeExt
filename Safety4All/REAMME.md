# SafeExt

[TODO] Descrivere cosa fa il progetto

# Link utili
- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector?retiredLocale=it)
- [body onload](https://www.w3schools.com/jsref/event_onload.asp)
- [Where to add script in HTML](https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html)
- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)


Quando faccio partire l'estensione con il tasto play, mi compare l'alert che ho scelto sulla estensione e non in mezzo lo schermo come dovrebbe ma poi non accade nulla.. In quanto secondo me il codice js va prova ad eseguire la funzione su popup.html e non sulla pagina
Invece quando incollo il codice intero della funzione nella console di google funziona soltanto il primo comando ,
cioè: "document.querySelector('#AULE').click();"



Poi ho scoperto che nel codice sorgente della pagina l'href che io vado a selezionare cambia ogni giorno per via della data finale (nel secondo passaggio questo qui
:const links = document.querySelectorAll('a[href="https://us-central1-eiloborg.cloudfunctions.net/s4aweb?token=s278178&c=9f8f1a47-f6eb-4845-b042-f6da7c25f0fb4fed8b03ee613c4d5781cd8cf35ded13&f=12b&v1=14.00&v5=20211121"]');
    for(let i = 0; i < links.length; i++) {
      links[i].click();
    }
) ) quindi in realtà basta che io cambi la data e posso prenotare quando voglio le aule... 