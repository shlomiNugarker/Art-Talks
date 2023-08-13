/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpService } from './httpService'

export const artService = {
  getById,
  save,
  query,
}

async function query() {
  return await httpService.get(`art`)
}

async function getById(id: string) {
  return await httpService.get(`art/${id}`)
}

async function save(art: any) {
  const savedArt = art.id
    ? await httpService.put(`art/${art.id}`, art) // to do
    : await httpService.post('art/', art)

  return savedArt
}
