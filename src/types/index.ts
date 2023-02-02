export interface INote {
  id: number
  label: string
  description: string
  createdAt: string
  comment: IComment[]
}

export interface IComment {
  id: number
  comment: string
}
