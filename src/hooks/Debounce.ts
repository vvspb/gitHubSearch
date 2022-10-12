import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 450): string {
  const [debounced, setDebounced] = useState(value)

  useEffect(()=> {
   const handler = setTimeout(()=> setDebounced(value), delay)
   return () => clearTimeout(handler)
  }, [value, delay])

  return debounced  // кастомный хук для задержки отправки запроса при вводе в поисковике
}