import * as express from 'express'
import * as Promise from 'bluebird'

import { PushHandler } from './push-handler'
import { GameHandler } from './game-handler'


export class Server {
  
  private app: express.Express

  private pushHandler: PushHandler
  private gameHandler: GameHandler

  constructor() {
    this.app = express()
    this.pushHandler = new PushHandler()
    this.gameHandler = new GameHandler()

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

    this.app.get('/api/change/:index/:n/:color', (req, res) => {
      const index = parseInt(req.params.index, 10)
      const n = parseInt(req.params.n, 10)
      const color = req.params.color
      console.log(`Change index ${index}, n ${n}, color ${color}`)
      this.gameHandler.changeBox(index, n, color)
      res.sendStatus(200)
      const data = {
        field: this.gameHandler.getField(),
        changeId: this.gameHandler.getChangeId(),
          winner: this.gameHandler.getWinner()
      }
      this.pushHandler.resolveOpenPromises(data)
    })

    this.app.get('/api/field/:changeId', (req, res) => {
      const changeId = req.params.changeId
      if (this.gameHandler.getChangeId() > changeId) {
        const data = {
          field: this.gameHandler.getField(),
          changeId: this.gameHandler.getChangeId(),
          winner: this.gameHandler.getWinner()
        }
        res.status(200).send(data)
      } else {
        this.pushHandler.addToOpenPromises(this.gameHandler.getChangeId())
          .then((changeId: number) => {
            res.status(200).send({ changeId })
          })
      }
    })
  }
}
