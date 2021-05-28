import React from 'react'

import { Container, Content } from './style'
import DragNDrop from './DragNdDrop/index'
import { useFileAcceptInfo } from '../context/fileinfoaccept'
import FileList from './FileList/index'
// import IsDragRejectProvider, { useDragReject } from '../context/isdragreject'
// import { getFileExtension } from '../utils/functions'
// import { getFileData } from '../utils/functions'

function Screen() {

	// const fileArray = {
	// 	fileAccept: [],
	// 	fileReject: [],
	// 	total: 0
	// };
	// const [fileInfo, setFileInfoAccept] = useState(fileArray);
	// let fileSum = 0;
	// const { setdragReject } = useDragReject();

	const { fileInfoAccept, setFileInfoAccept } = useFileAcceptInfo();

	const handleUploadAccept = array => {
		const files = array.map( file => ({
			fileName: file.name,
			pathName: file.path
		}));
		fileInfoAccept.fileAccept = fileInfoAccept.fileAccept.concat(files);
		fileInfoAccept.total += files.length;
		setFileInfoAccept(fileInfoAccept);
	}

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

	const handleUploadReject = (array) => {
		const files = array.map( file => ({
			fileName: file.file.name,
			pathName: file.file.path,
			code: file.errors[0].code,
			message: file.errors[0].message
		}));
		fileInfoAccept.fileReject = fileInfoAccept.fileReject.concat(files);
		fileInfoAccept.total += files.length;
		setFileInfoAccept(fileInfoAccept);

		console.log("filesInfoReject:");
		console.log(fileInfoAccept);
		console.log("reject:");
		console.log(fileInfoAccept.fileReject.length);
		console.log("fileSum:");
		console.log(fileInfoAccept.total);
	}

	// const handleOnDrop = () => {
	// 	fileSum = fileInfo.fileAccept.length + fileInfo.fileReject.length;
	// }

	// const { fileAccept, fileReject } = fileInfo;

	return (
		<Container>
				<Content>
					<DragNDrop
					// onUploadAccept={handleUploadAccept}
					// onUploadReject={handleUploadReject}
					/>
					<FileList />
					{/* Botao */}
				</Content>
		</Container>
	)
}

export default Screen
