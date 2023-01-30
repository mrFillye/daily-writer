import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'

interface IContextType {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export const GlobalContext = createContext<IContextType>({
  value: '',
  setValue: () => {},
})

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState<string>('')

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  )
}
