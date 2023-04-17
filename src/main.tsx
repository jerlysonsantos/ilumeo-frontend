import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { AppRouter } from './routers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<AppRouter />);
