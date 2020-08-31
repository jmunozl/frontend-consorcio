import React from 'react'
import { Card, Columns,  Heading } from 'react-bulma-components'

const ListStores = ({ stores }) => {
  console.log(stores)
  return (
    <Columns>
      {
        stores.map((store, index) => (
          <Columns.Column size={6} key={index}>
            <Card style={{ background: '#132A47' }}>
              <Card.Content>
                <Heading className="has-text-white columns is-2" size={6}>
                  <p className="has-text-warning">Nombre:</p>
                  {store.local_nombre}
                </Heading>
                <Heading className="has-text-white columns is-2" size={6}>
                  <p className="has-text-warning">Dirección:</p>
                  {store.local_direccion}
                </Heading>
                <Heading className="has-text-white columns is-2" size={6}>
                  <p className="has-text-warning">Teléfono:</p>
                  {store.local_telefono}
                </Heading>
                <Heading className="has-text-white columns is-2" size={6}>
                  <p className="has-text-warning">Latitud:</p>
                  {store.local_lat}
                </Heading>
                <Heading className="has-text-white columns is-2" size={6}>
                  <p className="has-text-warning">Longitud:</p>
                  {store.local_lng}
                </Heading>
              </Card.Content>
            </Card>
          </Columns.Column>
        ))
      }
    </Columns>

  )
}

export default ListStores