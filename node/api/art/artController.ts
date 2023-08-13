import artService from './artService'
import { Request, Response } from 'express'

export default { getArts, getArt }

async function getArts(req: Request, res: Response) {
  try {
    const arts = await artService.get()
    res.json(arts)
  } catch (err) {
    console.error(err)
    res.status(401).send({ err: 'Failed to get arts' })
  }
}
async function getArt(req: Request, res: Response) {
  try {
    const { id } = req.params
    const art = await artService.getById(id)
    res.json(art)
  } catch (err) {
    console.error(err)
    res.status(401).send({ err: 'Failed to get art By Id' })
  }
}
