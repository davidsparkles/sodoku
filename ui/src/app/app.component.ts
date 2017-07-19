import { Component } from '@angular/core'

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mycolor: string
  color: string

  constructor(
    public dataService: DataService
  ) {
    if (Math.random() < 0.5) this.mycolor = 'blue'
    else this.mycolor = 'red'
    this.color = 'red'

    this.loadColor()
  }

  public changeColor(): void {
    this.dataService.changeColor(this.mycolor)
  }

  public loadColor(): void {
    this.dataService.getColor(this.color)
      .then((color) => {
        this.color = color
        this.loadColor()
      })
  }
}
