import React, { createContext, useContext, useState } from 'react'

const FileRejectContext = createContext();

const fileArrayReject = {
	fileReject: [],
	total: 0,
	teste: 0
};

export default function FileInfoRejectProvider({children}) {
	const [fileInfoReject, setFileInfoReject] = useState(fileArrayReject);

	return (
		<FileRejectContext.Provider
			value={{
				fileInfoReject,
				setFileInfoReject
			}}
		>
			{children}
		</FileRejectContext.Provider>
	)
}

export function useFileRejectInfo() {
	const context = useContext(FileRejectContext);
	const {fileInfoReject, setFileInfoReject} = context;
	return {fileInfoReject, setFileInfoReject};
}
