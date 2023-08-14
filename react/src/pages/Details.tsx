/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { socketService } from '../services/socketService'

import style from '../assets/scss/pages/_details.module.scss'
import { artService } from '../services/artService'

export function Details({ arts, setArts }: any) {
  const params = useParams()
  const [art, setArt] = useState<any>()
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const artToShow = arts.find(
      (art: { id: string | undefined }) => art.id?.toString() === params.id
    )

    setArt(artToShow)
  }, [arts, params.id])

  useEffect(() => {
    socketService.on('get-msg', (updatedArt: any) => {
      const updatedArts = [...arts]
      const idx = updatedArts.findIndex(
        (art) => art.id.toString() === updatedArt.id.toString()
      )
      setArt(updatedArt)
      updatedArts[idx] = updatedArt
      setArts(updatedArts)
    })
    return () => {
      socketService.off('get-msg')
    }
  }, [arts, setArts])

  const send = async () => {
    const artToSave = { ...art }
    artToSave?.msgs.push(msg)
    const savedArt = await artService.save(artToSave)

    socketService.emit('send-msg', savedArt)
    setMsg('')
  }

  return (
    <section className={style.details}>
      <div className={style.container}>
        <h1>{art?.name}</h1>
        <span>{art?.description}</span>

        <div>
          <div className={style?.img}>
            <img src={art?.image} alt="" />
          </div>
          <div className={style.chat}>
            <p>Chat</p>
            <div className={style.listmsg}>
              {art?.msgs?.map((msg: any) => (
                <p key={Math.random()}>{msg}</p>
              ))}
            </div>
            <div className={style.send}>
              <input
                type="text"
                value={msg}
                onChange={(ev) => setMsg(ev.target.value)}
              />
              <button onClick={send}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
