// Import React and ReactDOM
import { createRoot } from 'react-dom/client';
//import scss
import '@/css/index.scss';
// Import I18n
import '@/i18n/i18n';

// Import App Component
import MyApp from '@/components/app';
import { AlertDialogProvider } from '@/context/AlertDialogContext';
import AlertDialog from '@/components/atoms/AlertDialog/AlertDialog';

// Mount React App
const root = createRoot(document.getElementById('root')!);
root.render(
  <AlertDialogProvider>
    <MyApp />
    <AlertDialog />
  </AlertDialogProvider>,
);
