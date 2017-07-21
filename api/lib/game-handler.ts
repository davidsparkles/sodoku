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

  public getWinner(): string {
    const redField = _.map(this.field, ({ base, red }) => base === 0 ? red : base)
    const blueField = _.map(this.field, ({ base, blue }) => base === 0 ? blue : base)
    if (this.checkIfWon(redField)) return 'red'
    if (this.checkIfWon(blueField)) return 'blue'
    return null
  }

  private checkIfWon(field: number[]): boolean {
    const rows = _(field).chunk(9).value()
    const columns = _(field)
      .map((n, i) => ({ n, i }))
      .groupBy(({ n, i }) => i % 9)
      .values()
      .map((a: ArrayLike<{n, i}>) => _.map(a, ({ n }) => n))
      .value()
    const squares = _(field)
      .map((n, i) => ({ n, i: i - (i % 3) }))
      .groupBy(({ n, i }) => i % 9)
      .values()
      .flatten()
      .map(({ n }) => n)
      .chunk(9)
      .value()
    const rowsCorrectness = _(rows)
      .map(row => this.isCorrectSet(row))
      .uniq()
      .value()
    const areRowsCorrect = _.size(rowsCorrectness) && _.head(rowsCorrectness)
    const columnsCorrectness = _(columns)
      .map(column => this.isCorrectSet(column))
      .uniq()
      .value()
    const areColumnsCorrect = _.size(columnsCorrectness) && _.head(columnsCorrectness)
    const squaresCorrectness = _(squares)
      .map(square => this.isCorrectSet(square))
      .uniq()
      .value()
    const areSquaresCorrect = _.size(squaresCorrectness) && _.head(squaresCorrectness)
    return areRowsCorrect && areColumnsCorrect && areSquaresCorrect
  }

  private isCorrectSet(set: number[]): boolean {
    return _(set).reject(i => i === 0).uniq().size() === 9
  }

  private initializeField(): void {
    this.field = _.map(FIELD, (n: number, index: number) => ({
      index,
      base: n,
      red: 0,
      blue: 0
    }))
  }

  public testFinField(): void {
    console.log('Finfield: ', this.checkIfWon(FINFIELD))
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

const FINFIELD: number[] = [
  1,2,3,4,5,6,7,8,9,
  4,5,6,7,8,9,1,2,3,
  7,8,9,1,2,3,4,5,6,
  2,3,4,5,6,7,8,9,1,
  6,7,8,9,1,2,3,4,5,
  8,9,1,2,3,4,5,6,7,
  3,4,5,6,7,8,9,1,2,
  5,6,7,8,9,1,2,3,4,
  9,1,2,3,4,5,6,7,8
]
