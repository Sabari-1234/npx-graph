import { Component, OnInit } from '@angular/core';
interface CustomLink {
  id: string;
  source: string;
  target: string;
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  zoomEnabled: boolean = true;
  showMiniMap: boolean = true;
  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomSpeed: number = 0.5;
  zoomLevel: number = 0.75;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;
  autoZoom: boolean = true;
  autoCenter: boolean = true;
  links: CustomLink[] = [
    {
      id: 'a',
      source: 'first',
      target: 'second',
    },
    {
      id: 'b',
      source: 'first',
      target: 'third',
    },
  ];
  nodes = [
    {
      id: 'first',
      label: 'A',
      color: 'olive',
      x: 100,
      y: 100,
    },
    {
      id: 'second',
      label: 'B',
      color: 'silver',
      x: 300,
      y: 200,
    },
    {
      id: 'third',
      label: 'C',
      color: 'teal',
      x: 500,
      y: 100,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
