import React, { createContext, useContext, useState } from 'react'

const FileContext = createContext();

const fileArray = [
	{
		filename: "",
		pathName: ""
	}
]

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
