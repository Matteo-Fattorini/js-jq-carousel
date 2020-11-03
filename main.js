/**
Descrizione:
Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera ( e' un evento diverso dal click, quale? )
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
Bonus:
Clicchiamo sui pallini e mostriamo l'immagine corrispondente
Generiamo i pallini con JS */

/**
 * @author Matteo Fattorini
 * on 03/11/2020
 */

//! creiamo i pallini
$(document).ready(function () {
  const imagesLength = $(".images img").length;

  for (var i = 0; i < imagesLength; i++) {
    newDot = document.createElement("i");
    newDot.className = "fas fa-circle dots ";
    newDot.value = i;
    if (i == 0) {
      newDot.classList.add("first");
      newDot.classList.add("active");
    } else if (i == imagesLength - 1) {
      newDot.classList.add("last");
    }
    $(".nav").append(newDot);
  }

  //!funzione per andare anvanti
  function moveOn() {
    {
      var currentDot = $(".nav i.active");
      var currentImg = $("img.active");
      if (currentImg.hasClass("last")) {
        $("img.first").addClass("active");
        $(".nav i.first").addClass("active");
      }
      currentImg.removeClass("active");
      currentImg.next().addClass("active");
      currentDot.removeClass("active");
      currentDot.next().addClass("active");
    }
  }

  //!funzione per andare indietro
  function moveBack() {
    var currentDot = $(".nav i.active");
    var currentImg = $("img.active");
    if (currentImg.hasClass("first")) {
      $("img.last").addClass("active");
      $(".nav i.last").addClass("active");
    }
    currentDot.removeClass("active");
    currentDot.prev().addClass("active");
    currentImg.removeClass("active");
    currentImg.prev().addClass("active");
  }

  //! chiamiamo le funzioni su arrow right e left
  $(".next").click(moveOn);
  $(".prev").click(moveBack);

  //!Consideriamo i bottoni premuti

  $("body").keydown(function (event) {
    if ((event = "ArrowLeft")) {
      moveBack();
    } else if ((event = "ArrowRight")) {
      moveOn();
    }
  });

  //! aggiungiamo il click ai pallini
  $(".dots").click(function () {
    selDot = $(this).val();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var images = $(this).parent().siblings(".images").children();

    // console.log(images);
    // console.log(images[1])
    // console.log(images.length)

    for (var i = 0; i < images.length; i++) {
      if (selDot == i) {
        $(images[i]).addClass("active");
        console.log("sono qui");
      } else {
        $(images[i]).removeClass("active");
        console.log("sono nell else");
      }
    }
  });
});
