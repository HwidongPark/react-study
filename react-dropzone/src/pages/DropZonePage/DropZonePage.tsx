import { useCallback, useState } from "react"
import { FileRejection, useDropzone } from "react-dropzone";
import styles from "./DropZonePage.module.css";

interface FileWithPreview extends File {
  preview?: string;
}

export default function DropZonePage() {

  const [files, setFiles] = useState<FileWithPreview[]>([]);

  /**
   * onDrop 함수를 정의해서 input으로 받은 파일을 핸들링함
   */
  const onDrop = useCallback((acceptedFile: File[]) => {
  
    // console.log(acceptedFile);
    
    if (acceptedFile.length) {
      setFiles(prevFiles => {
        return [
          ...prevFiles,
          ...acceptedFile.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
        ]
      })
    }
    
  }, []);

  // ### useDropzone에서 리턴하는 변수들을 가져와서 사용함
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});
  console.log(files);
  console.log(files.length);
  return (
    <div className={styles['dropzone-page-container']}>
      <h1 className={styles['dropzone-page-header']}>DropZone Page</h1>
      <form>
        <div {...getRootProps({
          // dropzone에서 attribute넣고싶으면 element에 넣는게 아니라 여기에 넣어야 함
          className: styles['dropzone-div-container']
        }
        )}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      </form>

      <div>
        {
          files.length > 0 &&
          <div>
            {files.map(file => {
              console.log(file)
              return (
                <img src={file.preview} alt="test" />
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}