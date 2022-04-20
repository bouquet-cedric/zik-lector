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
    Lecteur.setVolumeColor([
      "#A6FE52", // green
      "#D4EA63", // kaki
      "#FFF55F", // paleyellow
      "#FEA056", // paleorange 
      "#FF4E54" // red pale
    ])
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
    console.log(this.lector);
  }
}
