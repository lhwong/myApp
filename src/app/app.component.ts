import { AfterViewInit, Component, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import * as Plot from '@observablehq/plot';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @Input()
  public data: any = [];



  svg: any;

  chartRef: any;

  constructor(private http: HttpClient) {
  }

  

  ngAfterViewInit(): void {
    this.chartRef = $('.chartPercentPrice');



   

    console.log(this.data)

    let data1 = [
      {
        "Date": 1694649600000,
        "Listing": "L",
        "Earnings": 134.56,
        "Booked": 1694476800000,
        "Nights": 1
      },
      {
        "Date": 1694563200000,
        "Listing": "R",
        "Earnings": 142.97,
        "Booked": 1694304000000,
        "Nights": 1
      },
      {
        "Date": 1694822400000,
        "Listing": "L",
        "Earnings": 151.38,
        "Booked": 1694304000000,
        "Nights": 1
      },
      {
        "Date": 1694736000000,
        "Listing": "L",
        "Earnings": 151.38,
        "Booked": 1694217600000,
        "Nights": 1
      },
      {
        "Date": 1700870400000,
        "Listing": "R",
        "Earnings": 152.22,
        "Booked": 1683676800000,
        "Nights": 1
      },
      {
        "Date": 1692144000000,
        "Listing": "R",
        "Earnings": 162.31,
        "Booked": 1686528000000,
        "Nights": 1
      }];

    const svg = Plot.rectY(data1, Plot.binX({y: "count"}, {x: "Earnings", fill: "Listing", tip: true})).plot();

    /*const svg = Plot.plot({
      marks: [
        Plot.rectY(this.data, Plot.binX({y: "count"}, {x: "weight", fy: "sex"})),
        Plot.ruleY([0])
      ]
    })*/
    

    this.chartRef.html(svg);

  }
}
