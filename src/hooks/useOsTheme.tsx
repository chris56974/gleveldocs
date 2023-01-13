import { useEffect, useState } from "react";

/** 
 * This hook will return the user's current OS theme (dark, light)
 */
function useOsTheme() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleThemeChange = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light')

    mediaQuery.addEventListener('change', handleThemeChange)

    if (mediaQuery.matches) setTheme('dark')

    // This runs when the component using this hook is just about to unmount
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [])

  return theme
}

export default useOsTheme