import * as express from 'express'
import * as Promise from 'bluebird'
import { PushHandler } from './push-handler'


export class Server {
  
  private app: express.Express
  private color: string = 'red'

  private pushHandler: PushHandler

  constructor() {
    this.app = express()
    this.pushHandler = new PushHandler()

    this.configureRoutes()    
  }

  public listen(port: string): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.app.listen(port, (error) => {
        if (error) rej(error)
        else res()
      })
    })
  }

  private configureRoutes() {
    this.app.use('/', express.static('../ui/dist'))
    
    this.app.get('/api/change/:color', (req, res) => {
      const color = req.params.color
      this.changeColor(color)
      console.log('Changed color to: ', this.color)
      res.sendStatus(200)
      this.pushHandler.resolveOpenPromises(this.color)
    })

    this.app.get('/api/color/:currentColor', (req, res) => {
      const currentColor = req.params.currentColor
      if (currentColor !== this.color) {
        res.status(200).send(this.color)
      } else {
        this.pushHandler.addToOpenPromises(this.color)
          .then((data: any) => {
            res.status(200).send(this.color)
          })
      }
    })
  }

  private changeColor(color: string): void {
    this.color = color
    /*
    if (this.color === 'red') this.color = 'blue'
    else this.color = 'red'
    */
  }
}
