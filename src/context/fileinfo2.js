import React, { createContext, Component } from 'react'

const FileContext = createContext();


export class FileInfoProvider extends Component {

	state = {
		fileAccept: [],
		fileReject: [],
		total: 0
	};
	// const [fileInfo, setFileInfo] = useState(fileArray);


	render() {
		const { fileInfo, setFileInfo } = this.state;
		return (
			<FileContext.Provider
				value={{
					fileInfo,
					setFileInfo
				}}
			>
				{this.props.children}
			</FileContext.Provider>
		)
	}
}

export default FileInfoProvider




// {
// 	fileAccept: [{
// 		fileName: null,
// 		path: null
// 	}],
// 	fileReject: [{
// 		fileName: null,
// 		path: null,
// 		code: null,
// 		message: null
// 	}]
// };

// [
// 	{
// 		fileName: null,
// 		pathName: null
// 	}
// ]
