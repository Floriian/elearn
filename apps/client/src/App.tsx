import { Button } from 'antd'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { loginWithRedirect, user } = useAuth0();
  return (
    <>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
      {user ? <p>{user.email}</p> : ''}

    </>
  )
}

export default App
