import React from 'react'
import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage } from './style'

const DragNDrop = () => {

	const showDragMessage = (isDragActive, isDragReject) => {
		if(!isDragActive) {
      return <UploadMessage><p>Drag files here</p></UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type="error"><p>Ops... File don't supported!</p></UploadMessage>
    }

    return <UploadMessage type="success"><p>Drop here</p></UploadMessage>
	}

	return (
		<Dropzone accept="" onDropAccepted={() => {}}>
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
