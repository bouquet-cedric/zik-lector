import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var Lecteur;

@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.scss']
})


export class LectorComponent implements OnInit {
  @ViewChild('lector') lector:ElementRef;

  constructor() { }
  
  ngOnInit(): void {
    var lecteur = new Lecteur("lector");
    Lecteur.useStyleProgressBar(true);
    Lecteur.setColorTime([
        "blue",
        "green",
        "yellow",
        "red"
    ]);
    lecteur.addRecord("/assets/audios/Casseurs Flowters - À l'heure où je me couche.mp3");
    lecteur.addRecord("/assets/audios/Keny Arkana - La Mère Des Enfants Perdus.mp3");
    lecteur.addRecord("/assets/audios/Générique - Arsène Lupin.mp3");
    lecteur.addRecord("/assets/audios/Z-Ryk - Brume d'antan.flac");
    lecteur.addRecord("/assets/audios/Z-Ryk - Compo.flac");
    lecteur.addRecord("/assets/audios/Z-Ryk - Maedievus.flac");
    lecteur.addRecord("/assets/audios/Z-Ryk - Melodius.flac");
    lecteur.addRecord("/assets/audios/Z-Ryk - Mi locura.flac");
    lecteur.addRecord("/assets/audios/Z-Ryk - Riff.flac");
    lecteur.addRecord("/assets/audios/Z-Ryk - Street Song.flac");
    lecteur.show();
    let cont = <HTMLElement>(document.getElementsByClassName("container")[0]);
    cont.style.overflow="hidden";
  }
  
  ngAfterViewInit() {
    console.log("TEST :");
    console.log(this.lector);
  }
}
