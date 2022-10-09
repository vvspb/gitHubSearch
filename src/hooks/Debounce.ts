import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 650): string {
  const [debounced, setDebounced] = useState(value)

  useEffect(()=> {
   const handler = setTimeout(()=> setDebounced(value), delay)
   return () => clearTimeout(handler)
  }, [value, delay])

  return debounced
}