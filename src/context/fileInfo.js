import React, { createContext, useContext, useState } from 'react'

const FileContext = createContext();

const fileArray = {
	fileAccept: [],
	fileReject: []
};

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

export default function FileInfoProvider({children}) {
	const [fileInfo, setFileInfo] = useState(fileArray);

	return (
		<FileContext.Provider
			value={{
				fileInfo,
				setFileInfo
			}}
		>
			{children}
		</FileContext.Provider>
	)
}

export function useFileInfo() {
	const context = useContext(FileContext);
	const {fileInfo, setFileInfo} = context;
	return {fileInfo, setFileInfo};
}
