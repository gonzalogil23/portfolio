'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang } from '@/lib/translations'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations['es']
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: translations['es'],
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  const setLang = (l: Lang) => setLangState(l)

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
