// Import React and ReactDOM
import { createRoot } from 'react-dom/client';

//import scss
import '@/css/index.scss';

// Import Framework7
import Framework7 from 'framework7/lite';
import Preloader from 'framework7/components/preloader';
// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import 'framework7/css/bundle';

// // Import Icons and App Custom Styles
// import "../css/commons/icons.css";
// import "../css/index.scss";

// Import App Component
import MyApp from '@/components/app';
import { AlertDialogProvider } from '@/context/AlertDialogContext';
import AlertDialog from '@/components/atoms/AlertDialog/AlertDialog';

// // Import I18n
// import "../i18n/i18n";

// Init F7 React Plugin
Framework7.use([Framework7React, Preloader]);

// Mount React App
const root = createRoot(document.getElementById('root')!);
root.render(
  <AlertDialogProvider>
    <MyApp />
    <AlertDialog />
  </AlertDialogProvider>,
);
