import axios from "axios";

type FetchDataParams = {
  url: string
  setState:() => <SetStateAction>
};

export const fetchData = ({url, setState}: FetchDataParams) => {
  axios({
    method: 'GET',
    url: url,
  }).then(res => {
    setState(res.data)
  }).catch(e => {
    console.error(e.message);
  })
}