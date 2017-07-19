import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class DataService {

  constructor(
    private http: Http
  ) { }

  public changeColor(mycolor: string): Promise<void> {
    const url = `api/change/${mycolor}`
    return this.http.get(url)
      .toPromise()
      .then((response) => {
        return
      })
  }

  public getColor(color: string): Promise<string> {
    const url = `api/color/${color}`
    return this.http.get(url)
      .toPromise()
      .then((response) => response.text())
  }

}
