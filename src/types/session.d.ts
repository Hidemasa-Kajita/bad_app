import { User } from '../database/entities/User'


export type session = {
    path: string,
    _expires: number | null,
    originalMaxAge: number | null,
    httpOnly: boolean,
    secure: boolean,
    user?: User,
}