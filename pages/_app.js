import { Provider } from 'react-redux';
import configureStore from '@/redux/store';
import LngProvider from '@/components/LngProvider/index';

const store = configureStore();

import "@fontsource/pacifico/400.css";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/300-italic.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/400-italic.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/500-italic.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/600-italic.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/700-italic.css";
import "@fontsource/rubik/800.css";
import "@fontsource/rubik/800-italic.css";
import "@fontsource/rubik/900.css";
import "@fontsource/rubik/900-italic.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/animate.min.css";
import "@/plugins/fontawesome-5/css/fontawesome-all.min.css";
import "@/plugins/icofont/css/icofont.css";
import "@/plugins/printify-icon/style.css";
import "@/css/hover.min.css";
import "@/css/style.css";
import "@/css/responsive.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <LngProvider>
        <Component {...pageProps} />
      </LngProvider>
    </Provider>
  ) 
}

export default MyApp;
