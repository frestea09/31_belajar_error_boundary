import React from 'react'
import Mahasiswa from './Mahasiswa'
function Header(props){
    const listMahasiswa = [
        {
            nim :'10112299',
            nama : 'ilman teguh prasetya',
            skor : 'A'
        },
    ]
    const mahasiswa = listMahasiswa.map(mahasiswa =><Mahasiswa key={listMahasiswa.nim} mahasiswa={mahasiswa}/>)
    return(
        <div>
            {mahasiswa}
            <h1>Website Latihan ilman</h1>
            <p>Selamat Datang <b>{props.pengguna}</b></p>
            <p>Jumlah : {props.jumlahPengguna}</p>
            <button onClick={props.incrementPengguna}>Tambah</button>
            <p>Notice : {props.pengunjung}</p>
            <button onClick={props.logoutPengguna}>Logout</button>
        </div>
    )
}

export default React.memo(Header)