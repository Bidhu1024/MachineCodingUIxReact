
import FileExplorer from './components/FileExplorer'
import data from "./components/data.json"
import { FileNode } from './components/type';
import "./App.css"
function App() {


  return (
  <FileExplorer data={data}/>
  )
}

export default App
