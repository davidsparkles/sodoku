import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Box } from './box'

@Injectable()
export class DataService {

  constructor(
    private http: Http
  ) { }

  public changeBox(index: number, n: number, mycolor: string): Promise<void> {
    const url = `api/change/${index}/${n}/${mycolor}`
    return this.http.get(url)
      .toPromise()
      .then((response) => {
        return
      })
  }

  public getData(changeId: number): Promise<{ changeId: number, field: Box[], winner: string}> {
    const url = `api/field/${changeId}`
    // return Promise.resolve(DATA)
    return this.http.get(url)
      .toPromise()
      .then((response) => {
        const data = <{ changeId: number, field: Box[], winner: string}> response.json()
        return data
      })
  }
}

const DATA = {"field":[{"index":0,"base":0,"red":0,"blue":0},{"index":1,"base":8,"red":0,"blue":0},{"index":2,"base":0,"red":0,"blue":0},{"index":3,"base":0,"red":0,"blue":0},{"index":4,"base":0,"red":0,"blue":0},{"index":5,"base":0,"red":0,"blue":0},{"index":6,"base":2,"red":0,"blue":0},{"index":7,"base":0,"red":0,"blue":0},{"index":8,"base":0,"red":0,"blue":0},{"index":9,"base":0,"red":0,"blue":0},{"index":10,"base":0,"red":0,"blue":0},{"index":11,"base":0,"red":0,"blue":0},{"index":12,"base":0,"red":0,"blue":0},{"index":13,"base":8,"red":0,"blue":0},{"index":14,"base":4,"red":0,"blue":0},{"index":15,"base":0,"red":0,"blue":0},{"index":16,"base":9,"red":0,"blue":0},{"index":17,"base":0,"red":0,"blue":0},{"index":18,"base":0,"red":0,"blue":0},{"index":19,"base":0,"red":0,"blue":0},{"index":20,"base":6,"red":0,"blue":0},{"index":21,"base":3,"red":0,"blue":0},{"index":22,"base":2,"red":0,"blue":0},{"index":23,"base":0,"red":0,"blue":0},{"index":24,"base":0,"red":0,"blue":0},{"index":25,"base":1,"red":0,"blue":0},{"index":26,"base":0,"red":0,"blue":0},{"index":27,"base":0,"red":0,"blue":0},{"index":28,"base":9,"red":0,"blue":0},{"index":29,"base":7,"red":0,"blue":0},{"index":30,"base":0,"red":0,"blue":0},{"index":31,"base":0,"red":0,"blue":0},{"index":32,"base":0,"red":0,"blue":0},{"index":33,"base":0,"red":0,"blue":0},{"index":34,"base":8,"red":0,"blue":0},{"index":35,"base":0,"red":0,"blue":0},{"index":36,"base":8,"red":0,"blue":0},{"index":37,"base":0,"red":0,"blue":0},{"index":38,"base":0,"red":0,"blue":0},{"index":39,"base":9,"red":0,"blue":0},{"index":40,"base":0,"red":0,"blue":0},{"index":41,"base":3,"red":0,"blue":0},{"index":42,"base":0,"red":0,"blue":0},{"index":43,"base":0,"red":0,"blue":0},{"index":44,"base":2,"red":0,"blue":0},{"index":45,"base":0,"red":0,"blue":0},{"index":46,"base":1,"red":0,"blue":0},{"index":47,"base":0,"red":0,"blue":0},{"index":48,"base":0,"red":0,"blue":0},{"index":49,"base":0,"red":0,"blue":0},{"index":50,"base":0,"red":0,"blue":0},{"index":51,"base":9,"red":0,"blue":0},{"index":52,"base":5,"red":0,"blue":0},{"index":53,"base":0,"red":0,"blue":0},{"index":54,"base":0,"red":0,"blue":0},{"index":55,"base":7,"red":0,"blue":0},{"index":56,"base":0,"red":0,"blue":0},{"index":57,"base":0,"red":0,"blue":0},{"index":58,"base":4,"red":0,"blue":0},{"index":59,"base":5,"red":0,"blue":0},{"index":60,"base":8,"red":0,"blue":0},{"index":61,"base":0,"red":0,"blue":0},{"index":62,"base":0,"red":0,"blue":0},{"index":63,"base":0,"red":0,"blue":0},{"index":64,"base":3,"red":0,"blue":0},{"index":65,"base":0,"red":0,"blue":0},{"index":66,"base":7,"red":0,"blue":0},{"index":67,"base":1,"red":0,"blue":0},{"index":68,"base":0,"red":0,"blue":0},{"index":69,"base":0,"red":0,"blue":0},{"index":70,"base":0,"red":0,"blue":0},{"index":71,"base":0,"red":0,"blue":0},{"index":72,"base":0,"red":0,"blue":0},{"index":73,"base":0,"red":0,"blue":0},{"index":74,"base":8,"red":0,"blue":0},{"index":75,"base":0,"red":0,"blue":0},{"index":76,"base":0,"red":0,"blue":0},{"index":77,"base":0,"red":0,"blue":0},{"index":78,"base":0,"red":0,"blue":0},{"index":79,"base":4,"red":0,"blue":0},{"index":80,"base":0,"red":0,"blue":0}],"changeId":0, winner: null}
