import * as Promise from 'bluebird'
import * as _ from 'lodash'
import * as exrpess from 'express'

class OpenPromise {
  resolve: (data: any) => void
  reject: () => void
}

export class PushHandler {

  private waitTime = 2000
  private openPromises: OpenPromise[]

  constructor() {
    this.openPromises = []
  }

  public resolveOpenPromises(data: any): void {
    _(this.openPromises)
      .each(openPromise => openPromise.resolve(data))
    this.openPromises = []
  }

  public addToOpenPromises(data: any): Promise<any> {
    let outsideResolve: (data: any) => void
    let outsideReject: () => void
    const promise = new Promise((resolve, reject) => {
      outsideResolve = resolve
      outsideReject = reject
      setTimeout(() => resolve(data), this.waitTime)
    })
    this.openPromises.push({
      resolve: outsideResolve,
      reject: outsideReject
    })
    return promise
  }
}