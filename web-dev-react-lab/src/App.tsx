import './App.css'
import { useState } from 'react'
import { Hello } from './Hello'


function App() {
  const [name, setName] = useState<string>('Élise')
  const [newName, setNewName] = useState<string>('')

  function onValidate() {
    setName(newName)
    setNewName('')
  }

  return (
    <>
      <Hello name={name}>
        How are you boo ?
      </Hello>
      <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
      <button onClick={onValidate}>Valider</button>
      <h3>This is a substitute</h3>
    </>
  )
}

export default App
