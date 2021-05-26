import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import Screen from './screen'
import FileInfoProvider from './context/fileInfo'
// import IsDragRejectProvider from './context/isdragreject'

function App() {
  return (
		<FileInfoProvider>
			<ThemeProvider theme={defaultTheme}>
				<Screen />
				<GlobalStyle />
			</ThemeProvider>
		</FileInfoProvider>
  );
}

export default App;
