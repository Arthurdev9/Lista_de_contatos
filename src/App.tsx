import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Cadastro from './pages/Cadastro'
import { useEffect } from 'react'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <BarraLateral />
        <ListaDeContatos />
      </>
    )
  },
  {
    path: '/cadastrar',
    element: <Cadastro />
  }
])

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container data-aos="fade-down">
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
