import UserPreferencesContext from "./context/UserPreferences";
import useOsTheme from "./hooks/useOsTheme";

function App() {
  const theme = useOsTheme()

  return (
    <UserPreferencesContext.Provider value={{
      theme,
    }}>
      <p>Hey</p>
    </UserPreferencesContext.Provider>
  )
}

export default App;
