import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Cards, Card } from './styled'

function App() {
  const [personagens, setPersonagem] = useState([])
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setPersonagem(response.data.results)
      })
      .catch((error) => {
        console.log(error.data)
      })
  }, [])

  useEffect(() => {
    setFiltro(
      personagens.filter(personagem => {
        return personagem.name.includes(busca)
      })
    )
  }, [busca, personagens])

  const buscarNome = (event) => {
    setBusca(event.target.value)
  }

  return (
    <Container>
      <input
        placeholder="Digite o nome do personagem"
        onChange={buscarNome}
      />
      <Cards>
        {filtro.map(personagem => (
          <Card key={personagem.id}>
            <p>{personagem.name}</p>
            <img src={personagem.image} alt={personagem.name} />
          </Card>
        ))}

      </Cards>
    </Container>
  );
}

export default App;