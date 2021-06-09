import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import AppLocale from '@/lngProvider/index';

const LngProvider = ({ children }) => {
  const { locale } = useSelector(state => state.setting);
  const currentAppLocale = AppLocale[locale.locale];
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      {children}
    </IntlProvider>
  );
};

export default LngProvider;
