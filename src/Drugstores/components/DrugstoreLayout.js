import React, { useState,useEffect } from 'react'
import Header from './Header'
import Search from './Search'
import ListStores from './ListStores'
import { getStores,getComunas } from '../services'
import Loading from './Loading'
import { Container, Section } from 'react-bulma-components'


const DrugstoreLayout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [stores, setStores] = useState([])
  const [comunas, setComunas] = useState('')

  const handlerSubmit=(data)=>{
    setIsLoading(true)
    loadStores(data)
  }


  async function loadStores (data) {
    const response = await getStores(data)
    if (response===undefined){
      setIsLoading(false)
    }else{
      if (response.status === 200) {
        setStores(response.data.stores)
        console.log(comunas)
      }
      setIsLoading(false)
    }
  }

  async function loadComuna () {
    const response = await getComunas()
    if (response.status === 200) {
      setComunas(response.data)
    }
  }

  useEffect(()=>{
    loadComuna()
  },[])


  return (
    <>

      <Section>
        <Header title="Farmacias de turno"/>
        <Container>
          <Search handlerSubmit={handlerSubmit} />
        </Container>
      </Section>
      {
        isLoading && <Loading/>
      }
      {
        !isLoading && !stores.length && (<h2 className="title has-text-centered">No se encontraron farmacias</h2>)
      }

      {
        stores.length>0 && <ListStores stores={stores}/>
      }

    </>
  )
}

export default DrugstoreLayout