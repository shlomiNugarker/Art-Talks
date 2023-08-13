import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
// import { useNavigate } from 'react-router-dom'
import './assets/scss/global.scss'
import { useEffect, useState } from 'react'

const artsData = [
  {
    id: 1,
    name: 'red sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: 2,
    name: 'red ssdg',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: 13,
    name: 'sg hs',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: 14,
    name: 'fghj sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: 15,
    name: 'jdgj sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: 16,
    name: 'red sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: 17,
    name: 'red sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
]

function App() {
  const [arts, setArts] = useState<any[]>([])
  // const navigate = useNavigate()

  useEffect(() => {
    ;(() => {
      setArts(artsData)
    })()
  }, [])
  return (
    <>
      {/* <div>
        <p onClick={() => navigate('/')}>home</p>
        <p onClick={() => navigate('/details')}>details</p>
      </div> */}
      <Routes>
        <Route path="/" element={<Home arts={arts} />} />
        <Route path="/details/:id" element={<Details arts={arts} />} />
      </Routes>
    </>
  )
}

export default App
