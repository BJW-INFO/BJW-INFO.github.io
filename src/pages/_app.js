import { ThemeProvider, Global, css } from '@emotion/react';
import { useThemes } from '../hooks';
import { Layout } from 'src/components/layout';

export default function MyApp({ Component, pageProps }) {
  const { theme } = useThemes();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle theme={theme} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

const GlobalStyle = ({ theme }) => {
  const globalStyles = css`
    body {
      background: ${theme.bgColor[0]};
      color: ${theme.textColor[0]};
    }
  `;
  return <Global styles={globalStyles} />;
};