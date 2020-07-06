import React from 'react'

function Mahasiswa(props){
    return(
        <div>
            <p>Nim : {props.mahasiswa.nim} Nama : {props.mahasiswa.nama}</p>
        </div>
    )
}
export default Mahasiswa