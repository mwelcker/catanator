import {Component, OnInit} from '@angular/core';
import {Board} from '../model/board';
import {MapGeneratorService} from '../services/map-generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.page.html',
  styleUrls: ['./generator.page.scss'],
})
export class GeneratorPage implements OnInit {

  public board: Board;

  constructor(private mapService: MapGeneratorService) {
    this.board = this.mapService.generateMapByPreset('standard');
  }

  ngOnInit() {
  }

  generate() {
    this.board = this.mapService.generateMapByPreset('standard');
    console.log(this.board);
  }

  generateRandom(x: number, y: number) {
    this.board = this.mapService.generateBySize(x, y);
  }


}
