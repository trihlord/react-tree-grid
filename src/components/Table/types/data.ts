import type { Key } from 'react'

export type Data<T> = T[] | null | undefined

export type DataKey<T> = { [K in keyof T]: T[K] extends Key ? K : never }[keyof T]

export type GetDataKey<T> = (data: T) => T[DataKey<T>]
