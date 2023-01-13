import { createContext } from "react";

/** 
 * Grab user preferences like dark theme from their OS
 */

const UserPreferencesContext = createContext({
  theme: 'light'
})

export default UserPreferencesContext