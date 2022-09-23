import { createContext } from "react";
const TrafficBytesContext = createContext({
  selectedRowKeys: { source: [], destination: [], sumbytes: [] },
  setSelectedRowKeys: () => {},
});
export default TrafficBytesContext;
