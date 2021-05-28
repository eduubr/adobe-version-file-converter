import React from 'react'
import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage } from './style'
import { useFileAcceptInfo } from '../../context/fileinfoaccept'
import { useFileRejectInfo } from '../../context/fileinforeject'

const DragNDrop = () => {

	const { fileInfoAccept, setFileInfoAccept } = useFileAcceptInfo();
	const { fileInfoReject, setFileInfoReject } = useFileRejectInfo();

	const showDragMessage = (isDragActive) => {

		if(!isDragActive) {
      return (
				<UploadMessage>
					<p>Drag files here</p>
					<p>Or double click to open a file</p>
				</UploadMessage>
			)
    }

    // if(isDragReject) {
    //   return <UploadMessage type="error">Ops... File don't supported!</UploadMessage>
    // }

    return <UploadMessage type="success">Drop here</UploadMessage>
	}

	const handleUploadAccept = array => {
		const files = array.map( file => ({
			fileName: file.name,
			pathName: file.path
		}));
		fileInfoAccept.fileAccept = fileInfoAccept.fileAccept.concat(files);
		fileInfoAccept.total += files.length;
		setFileInfoAccept(fileInfoAccept);
	}

	const handleUploadReject = (array) => {
		const files = array.map( file => ({
			fileName: file.file.name,
			pathName: file.file.path,
			code: file.errors[0].code,
			message: file.errors[0].message
		}));
		fileInfoReject.fileReject = fileInfoReject.fileReject.concat(files);
		fileInfoReject.total += files.length;
		setFileInfoReject(fileInfoReject);

		console.log("filesInfoReject:");
		console.log(fileInfoReject);
		console.log("reject:");
		console.log(fileInfoReject.fileReject.length);
		console.log("fileSum:");
		console.log(fileInfoReject.total);
	}

	return (
		// (files) => {files.map((file) => {console.log(file.name)})}
		// (files)=>{setFileInfo(files.map(getFileData))
		// files => files.map(files => console.log(files.file.name)) //onDropRejected
		<Dropzone accept=".prproj"
		onDropAccepted={array => {
			const files = array.map( file => ({
				fileName: file.name,
				pathName: file.path
			}));
			const newState = {
				fileAccept: fileInfoAccept.fileAccept.concat(files),
				total: fileInfoAccept.total += files.length
			}
			// fileInfoAccept.fileAccept = fileInfoAccept.fileAccept.concat(files);
			// fileInfoAccept.total += files.length;
			console.log("accept:");
			console.log(newState);
			setFileInfoAccept(newState);
		}}
		onDropRejected={(array) => {
			const files = array.map( file => ({
				fileName: file.file.name,
				pathName: file.file.path,
				code: file.errors[0].code,
				message: file.errors[0].message
			}));
			const newState = {
				fileReject: fileInfoReject.fileReject.concat(files),
				total: fileInfoReject.total += files.length,
				teste: fileInfoReject.teste+1
			}
			// fileInfoReject.fileReject = fileInfoReject.fileReject.concat(files);
			// fileInfoReject.total += files.length;
			// fileInfoReject.teste += fileInfoReject.teste;
			console.log("reject:");
			console.log(newState);
			setFileInfoReject(newState);
		}}
		onDrop={()=>{
			// fileInfoReject.teste+=1;
			// setFileInfoReject(fileInfoReject)
			}}>
			{({ getRootProps, getInputProps, isDragActive}) => (
				<DropContainer
				{...getRootProps()}
				isDragActive={isDragActive}
				>
					<input {...getInputProps()} />
					{showDragMessage(isDragActive)}
					{/* <button onClick={setFileInfo(fileInfo+1)}>atualizar</button> */}
				</DropContainer>
			)}
		</Dropzone>
	)
}

export default DragNDrop
