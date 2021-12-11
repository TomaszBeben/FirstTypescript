import axios from "axios";

type FetchDataParams = {
  url: string
  setState: <SetStateAction<any>>
}

export const fetchData = (url, setState) => {
  axios({
    method: 'GET',
    url: url,
  }).then(res => {
    setState(res.data)
  }).catch(e => {
    console.error(e.message);
  })
}