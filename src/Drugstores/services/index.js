import axios from 'axios'

const baseUrl = 'https://backend-consorcio.herokuapp.com/api/'
console.log(baseUrl)
const baseULComuna = 'https://midastest.minsal.cl/farmacias/maps/index.php/utilidades/maps_obtener_comunas_por_regiones'

export async function getStores (data) {
  try {
    return await axios({
      url: `https://backend-consorcio.herokuapp.com/api/stores?comuna_nombre=${data.comuna}&local_nombre=${data.local}`,
      method: 'GET'
    })
  } catch (e) {
    console.log(e)
  }
}

export async function getComunas () {
  try {
    let comunas = ''
    const data = new FormData()

    data.append('reg_id', '7')

    await axios.post(`${baseULComuna}`, data).then((response => {
      comunas = response
    })).catch(error => {
      console.log(error)
    })
    return comunas
  } catch (e) {
    console.log(e)
  }
}

