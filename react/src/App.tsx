/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import './assets/scss/global.scss'
import { useEffect, useState } from 'react'

import { artService } from './services/artService'

function App() {
  const [arts, setArts] = useState<any[]>([])

  useEffect(() => {
    ;(async () => {
      const arts = await artService.query()
      console.log({ arts })

      setArts(arts)
    })()
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home arts={arts} />} />
        <Route
          path="/details/:id"
          element={<Details arts={arts} setArts={setArts} />}
        />
      </Routes>
    </>
  )
}

export default App
