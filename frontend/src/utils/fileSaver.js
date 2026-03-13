import FileSaver from 'file-saver';


export const downloadImage = (_id,photo)=>{

    FileSaver.saveAs(photo,`download ${_id}.jpg`)

}