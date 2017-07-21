import { Component } from '@angular/core'

import { DataService } from './data.service'
import { Box } from './box'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mycolor: string
  field: Box[]
  changeId: number
  selected: number

  numberBlock: number[] = [7,8,9,4,5,6,1,2,3,0]

  constructor(
    public dataService: DataService
  ) {
    if (Math.random() < 0.5) this.mycolor = 'blue'
    else this.mycolor = 'red'
    this.changeId = -1
    this.selected = -1
    this.loadData()
  }

  public changeBox(n: number): void {
    if (this.selected !== - 1) this.dataService.changeBox(this.selected, n,this.mycolor)
  }

  public loadData(): void {
    this.dataService.getData(this.changeId)
      .then(({ changeId, field, winner }) => {
        if ( changeId > this.changeId) {
          this.changeId = changeId
          this.field = field
          if (winner !== null) alert(`Game over: ${winner} has won the game.`)
        }
        this.loadData()
      })
  }

  public select(index: number) {
    if (this.selected === index) this.selected = -1
    else this.selected = index
  }
}
