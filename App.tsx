
import './App.css'
import FormComponent from './components/FormComponent'
import TableComponent from './components/TableComponent'
import "./styles/style.css"
import { FormProvider } from './components/FormProvider'

const App: React.FC=() => {
  return (
    <FormProvider>
      <div className='mainclass'>
      <FormComponent/>
      <TableComponent/>
      </div>
    </FormProvider>
  )
}

export default App
