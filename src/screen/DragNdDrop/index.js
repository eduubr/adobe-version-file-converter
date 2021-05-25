import React from 'react'
import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage } from './style'

const DragNDrop = () => {

	const showDragMessage = (isDragActive, isDragReject) => {



		if(!isDragActive) {
      return (<UploadMessage>
				<p>Drag files here</p>
				<p>Or double click to open a file</p>
				</UploadMessage>)
    }

    if(isDragReject) {
      return <UploadMessage type="error">Ops... File don't supported!</UploadMessage>
    }

    return <UploadMessage type="success">Drop here</UploadMessage>
	}

	return (
		// (files) => {files.map((file) => {console.log(file.name)})}
		<Dropzone accept="" onDropAccepted={()=>{}}>
			{({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
				<DropContainer
				{...getRootProps()}
				isDragActive={isDragActive}
				isDragReject={isDragReject}
				>
					<input {...getInputProps()} />
					{showDragMessage(isDragActive, isDragReject)}
				</DropContainer>
			)}
		</Dropzone>
	)
}

export default DragNDrop
