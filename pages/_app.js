// import '../styles/globals.css'
import 'antd/dist/antd.css'; 
import TrafficBytesContext from 'context/TrafficBytesContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  let _localFilters = { source:[], destination:[], sumbytes:[]}
  if (typeof window !== 'undefined') {
    //TODO: move these in own useLocalStorage hook
    const  tbd_filters = localStorage.getItem('tbd_filters')
    if(tbd_filters) _localFilters = JSON.parse(tbd_filters)
    else localStorage.setItem('tbd_filters', JSON.stringify(_localFilters))
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState(_localFilters);
  const handleSetSelectedRowKeys = (data) => {
    localStorage.setItem('tbd_filters', JSON.stringify(data || { source:[], destination:[], sumbytes:[]}))
    setSelectedRowKeys(data)
  }
  return <TrafficBytesContext.Provider value={[selectedRowKeys, handleSetSelectedRowKeys]}><Component {...pageProps} /></TrafficBytesContext.Provider>
}

export default MyApp
