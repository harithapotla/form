
import './App.css';
import FormInput from './components/FormInput';

function App() {
  return (
    <div className="app">
      <form>
      <FormInput placeholder="username"/>
      <FormInput placeholder='email'/>
      <FormInput placeholder='fullname'/>
      <FormInput placeholder='shortname'/>
      </form>
    </div>
  );
}

export default App;
