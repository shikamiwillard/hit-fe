import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-techie',
  templateUrl: './techie.component.html',
  styleUrls: ['./techie.component.css']
})
export class TechieComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public techieData;

  ngOnInit() {
    this.route.paramMap
    .subscribe(param => {
      const id = param.get('id');
        this.techieData = id;
    });
  }

}
