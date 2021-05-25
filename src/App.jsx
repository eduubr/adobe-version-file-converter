import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import Screen from './screen'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Screen />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
