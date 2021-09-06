import { atom } from 'jotai'
import { UserData } from 'HTTPApi'

const userAtom = atom<UserData | null>(null)

export { userAtom }
