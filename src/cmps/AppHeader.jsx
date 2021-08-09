import { NavLink } from "react-router-dom"

export function AppHeader() {
  return (
    <header className="app-header">
      <NavLink to="/"><h1>Mister-Bitcoin</h1></NavLink>
      <nav>
        <NavLink to="/contacts">Contacts</NavLink> |
        <NavLink to="/charts"> Charts</NavLink> 
      </nav>
    </header>
  )
}
