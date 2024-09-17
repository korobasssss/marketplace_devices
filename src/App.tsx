import {RouterProvider} from "react-router-dom";
import {router} from "./base/routing/elements";
import './i18n.ts'

function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
