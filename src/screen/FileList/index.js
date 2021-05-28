import React from 'react';

import { useFileAcceptInfo } from '../../context/fileinfoaccept'
import { useFileRejectInfo } from '../../context/fileinforeject'
// import { Container } from './style'

const FileList = ({fileCount}) => {

	const { fileInfoAccept } = useFileAcceptInfo();
	const { fileInfoReject } = useFileRejectInfo();

	// useEffect(() => {
	// 	console.log("atualizou!");
	// },[fileInfo]);

	console.log("fileInfoAccept.total");
	console.log(fileInfoAccept.total);
	console.log("fileInfoReject.total");
	console.log(fileInfoReject.total);

	return (
		<span>
			{fileInfoAccept.total+fileInfoReject.total>1?
			`${fileInfoAccept.total+fileInfoReject.total} files uploaded`:
			`${fileInfoAccept.total+fileInfoReject.total} file uploaded`}
			<button onClick={()=>{}} >continuar</button>
		</span>
	)
}

export default FileList
