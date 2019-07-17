import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.page.html',
  styleUrls: ['./employer.page.scss'],
})
export class EmployerPage implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('empData'));
    console.log(this.data);
    
  }

}
