import React, { createContext, useContext, useState } from 'react'

const FileAcceptContext = createContext();

const fileArrayAccept = {
	fileAccept: [],
	total: 0
};

export default function FileInfoAcceptProvider({children}) {
	const [fileInfoAccept, setFileInfoAccept] = useState(fileArrayAccept);

	return (
		<FileAcceptContext.Provider
			value={{
				fileInfoAccept,
				setFileInfoAccept
			}}
		>
			{children}
		</FileAcceptContext.Provider>
	)
}

export function useFileAcceptInfo() {
	const context = useContext(FileAcceptContext);
	const {fileInfoAccept, setFileInfoAccept} = context;
	return {fileInfoAccept, setFileInfoAccept};
}




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
