import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import Screen from './screen'
import FileInfoAcceptProvider from './context/fileinfoaccept'
import FileInfoRejectProvider from './context/fileinforeject'
// import IsDragRejectProvider from './context/isdragreject'

function App() {
  return (
		<FileInfoRejectProvider>
			<FileInfoAcceptProvider>
				<ThemeProvider theme={defaultTheme}>
					<Screen />
					<GlobalStyle />
				</ThemeProvider>
			</FileInfoAcceptProvider>
		</FileInfoRejectProvider>
  );
}

export default App;
