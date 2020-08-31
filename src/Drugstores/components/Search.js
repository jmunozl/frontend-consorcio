import React, { useState } from 'react'
import { Button,Columns } from 'react-bulma-components'


const Search = ({handlerSubmit}) => {
  const [formSearch, setFormSearch] = useState({
    comuna: '',
    local: ''
  })
  const handleChange=(event)=>{
    const {name,value} = event.target
    console.log(name,value)
    setFormSearch({...formSearch,[name]:value})
  }

  const _handleSubmit=(e)=>{
    e.preventDefault()
    handlerSubmit({...formSearch})
  }

  return (
    <div>
      <form onSubmit={_handleSubmit} >
      <Columns>
        <Columns.Column size={1}>
          <p style={{ color: 'white' }} className="is-4">Comuna:</p>
        </Columns.Column>
        <Columns.Column size={3}>
          <input type="text" className="input" name="comuna" onChange={handleChange} value={formSearch.comuna} />
        </Columns.Column>
        <Columns.Column size={1}>
          <p style={{ color: 'white'}} className="is-4">Local:</p>
        </Columns.Column>
        <Columns.Column size={3}>
          <input type="text" className="input" name="local" onChange={handleChange} value={formSearch.local} />
        </Columns.Column>
        <Columns.Column size={3}>
          <Button type="submit" color="success">Buscar</Button>
        </Columns.Column>
      </Columns>
      </form>
    </div>

    /*<div>
      <label className="label">Comuna</label>
      <input id="txtComuna" type="text"className="is-centered"  />
      <label className="label">Local</label>
      <input id="txtLocal" type="text" className="input" />
      <Button color="success">Buscar</Button>
    </div>*/

  )
}

export default Search
