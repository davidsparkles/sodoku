import * as express from 'express'
import * as Promise from 'bluebird'


export class Server {
  
  private app: express.Express
  private color: string = 'red'

  constructor() {
    this.app = express()

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
    this.app.use('/', express.static('ui'))
    
    this.app.get('/api/change', (req, res) => {
      this.changeColor()
      console.log('Changed color.')
      res.sendStatus(200)
    })

    this.app.get('/api/color/:currentColor', (req, res) => {
      const currentColor = req.params.currentColor
      console.log('Get color with: ', currentColor)
      if (currentColor !== this.color) {
        res.status(200).send(this.color)
      } else {
        setTimeout(() => {
          res.status(200).send(this.color)
        }, 1000)
      }
    })
  }

  private changeColor(): void {
    if (this.color === 'red') this.color = 'blue'
    else this.color = 'red'
  }
}
