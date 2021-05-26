import React from 'react'
import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage } from './style'
// import { useDragReject } from '../../context/isdragreject'
// import { useFileInfo } from '../context/fileInfo'

const DragNDrop = ({ onUploadAccept, onUploadReject }) => {

	// const { isDragReject } = useDragReject();

	const showDragMessage = (isDragActive) => {



		if(!isDragActive) {
      return (<UploadMessage>
				<p>Drag files here</p>
				<p>Or double click to open a file</p>
				</UploadMessage>)
    }

    // if(isDragReject) {
    //   return <UploadMessage type="error">Ops... File don't supported!</UploadMessage>
    // }

    return <UploadMessage type="success">Drop here</UploadMessage>
	}

	return (
		// (files) => {files.map((file) => {console.log(file.name)})}
		// (files)=>{setFileInfo(files.map(getFileData))
		// files => files.map(files => console.log(files.file.name)) //onDropRejected
		<Dropzone accept=".prproj" onDropAccepted={onUploadAccept} onDropRejected={onUploadReject} onDrop={()=>{}}>
			{({ getRootProps, getInputProps, isDragActive}) => (
				<DropContainer
				{...getRootProps()}
				isDragActive={isDragActive}
				// isDragReject={isDragReject}
				>
					<input {...getInputProps()} />
					{showDragMessage(isDragActive)}
				</DropContainer>
			)}
		</Dropzone>
	)
}

export default DragNDrop
