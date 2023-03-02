import './App.css';
import AppRouter from './navigation/AppRouter';
import { ServiceFactory } from './services/ServiceFactory';
import apiClientFactory from './shared/api/ApiClientFactory';
import axiosClient from './shared/api/AxiosClient';
import { DependencyProvider } from './shared/context/DependencyContext';

const apiClient = apiClientFactory(axiosClient);
const services = ServiceFactory(apiClient);

function App() {
  return (
    <DependencyProvider services={services}>
      <AppRouter />
    </DependencyProvider>
  );
}

export default App;
