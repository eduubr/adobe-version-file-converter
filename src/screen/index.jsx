import React from 'react'

import { Container, Content } from './style'
import DragNDrop from './DragNdDrop/index'
import { useFileInfo } from '../context/fileInfo'
// import IsDragRejectProvider, { useDragReject } from '../context/isdragreject'
// import { getFileExtension } from '../utils/functions'
// import { getFileData } from '../utils/functions'

const Screen = () => {

	const { fileInfo, setFileInfo} = useFileInfo();
	// const { setdragReject } = useDragReject();

	const handleUploadAccept = array => {
		const files = array.map( file => ({
			fileName: file.name,
			pathName: file.path
		}));
		fileInfo.fileAccept = fileInfo.fileAccept.concat(files);
		setFileInfo(fileInfo);

		// if(!files.map(file => {
		// 	const name = getFileExtension(file.fileName);
		// 	console.log(name);
		// 	console.log((name != 'prproj'));
		// 	return (name != 'prproj')
		// })) {
		// 	console.log(true);
		// 	// setdragReject(true);
		// }
		// console.log(files[0].filename);
		// console.log(files[0].pathname);
	}

	const handleUploadReject = array => {
		const files = array.map( file => ({
			fileName: file.file.name,
			pathName: file.file.path,
			code: file.errors[0].code,
			message: file.errors[0].message
		}));
		fileInfo.fileReject = fileInfo.fileReject.concat(files);
		setFileInfo(fileInfo);
		console.log("filesInfoReject:");
		console.log(fileInfo);
	}

	return (
		<Container>
				<Content>
					<DragNDrop
					onUploadAccept={handleUploadAccept}
					onUploadReject={handleUploadReject}
					/>
					{/* Botao */}
				</Content>
		</Container>
	)
}

export default Screen
