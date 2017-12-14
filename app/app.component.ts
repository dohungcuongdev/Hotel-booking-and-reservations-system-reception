import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  public cities = [
    { Id: 1, Name: "Ha Noi" },
    { Id: 2, Name: "HCM" }
  ];

  form_result: string;

  onSubmit(name, ssn, bd, city, checkin, pp) {
    this.form_result = name + " " + ssn + " " + bd + " " + city + " " + checkin + " " + pp;
  }
}
