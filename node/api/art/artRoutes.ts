import express from 'express'
import artController from './artController'

const router = express.Router()

router.get('/', artController.getArts)
router.get('/:id', artController.getArt)
router.put('/:id', artController.updateArt)
router.post('/', artController.addArt)

export default router
