import { createContext, useContext, useState } from "react"

const ReloadContext = createContext<any>(null)

export function ReloadProvider({ children }: { children: React.ReactNode }) {
  const [reloadFlag, setReloadFlag] = useState(0)

  const triggerReload = () => setReloadFlag(prev => prev + 1)

  return (
    <ReloadContext.Provider value={{ reloadFlag, triggerReload }}>
      {children}
    </ReloadContext.Provider>
  )
}

export const useReload = () => useContext(ReloadContext)
