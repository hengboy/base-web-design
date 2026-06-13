import zh from './zh'

export type MessageKey = keyof typeof zh
export type MessageDictionary = Record<MessageKey, string>
