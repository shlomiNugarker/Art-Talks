export default {
  getById,
  get,
  update,
  add,
}

async function get() {
  try {
    return artsData
  } catch (err) {
    console.error(err)
    throw err
  }
}
async function getById(itemId: string) {
  try {
  } catch (err) {
    console.error(err)
    throw err
  }
}

async function update(art: any) {
  try {
    const idx = artsData.findIndex((a) => a.id.toString() === art.id.toString())
    artsData[idx] = art
    return art
  } catch (err) {
    throw err
  }
}

async function add(art: any) {
  try {
    artsData.push(art)
  } catch (err) {
    throw err
  }
}

// DB:
const artsData = [
  {
    msgs: ['hey', 'how'],
    id: 1,
    name: 'red sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    msgs: [],
    id: 2,
    name: 'red ssdg',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    msgs: [],
    id: 13,
    name: 'sg hs',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1657998629861-4ae17f595530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    msgs: [],
    id: 14,
    name: 'fghj sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1633856384682-cff3b9f06682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    msgs: [],
    id: 15,
    name: 'jdgj sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    msgs: [],
    id: 16,
    name: 'red sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    msgs: [],
    id: 17,
    name: 'red sunset',
    description:
      'fgsg dfg sg sgsg;ol kdihgk dkdyndk fgdodm sfsfofs dfos mbgs sld',
    image:
      'https://images.unsplash.com/photo-1682687221248-3116ba6ab483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
]
