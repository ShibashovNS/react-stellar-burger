import { Outlet } from "react-router-dom";
import AppHeader from "../../header/app-header/app-header";


export default function Layout() {
  return (
  <>
  <AppHeader/>
  <Outlet />
  </>
  )
}