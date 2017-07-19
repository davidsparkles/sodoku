import * as _ from 'lodash'

class Box {
  base: number
  red: number
  blue: number
}

export class GameHandler {

  private field: Box[]
  private changeId: number

  constructor() {
    this.initializeField()
    this.changeId = 0
  }

  public changeBox(index: number, n: number, color: string): void {
    this.field[index][color] = n
    this.changeId += 1
  }

  public getChangeId(): number {
    return this.changeId
  }

  public checkIfFieldIsFinished(): boolean {
    return false
  }

  public getField(): Box[] {
    return this.field
  }

  private initializeField(): void {
    this.field = _.map(FIELD, (n: number) => ({
      base: n,
      red: 0,
      blue: 0
    }))
  }
}

const FIELD: number[] = [
  0,8,0,0,0,0,2,0,0,
  0,0,0,0,8,4,0,9,0,
  0,0,6,3,2,0,0,1,0,
  0,9,7,0,0,0,0,8,0,
  8,0,0,9,0,3,0,0,2,
  0,1,0,0,0,0,9,5,0,
  0,7,0,0,4,5,8,0,0,
  0,3,0,7,1,0,0,0,0,
  0,0,8,0,0,0,0,4,0
]