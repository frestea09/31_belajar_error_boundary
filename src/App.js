import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      'pengguna':'ilman teguh prasetya',
      'jumlah_pengguna':0,
      'statusLogin' : 'login',
      'name': '',
      'nim' : ''
    }
    this.incrementPengguna = this.incrementPengguna.bind(this)
    this.logoutPengguna = this.logoutPengguna.bind(this)
    this.setName = this.setName.bind(this)
    this.setNim = this.setNim.bind(this)
  }
  incrementPengguna(){
    this.setState(
      {
        jumlah_pengguna : this.state.jumlah_pengguna + 1
      }
    )
  }
  logoutPengguna(){
    this.setState(
      {
        statusLogin : 'logout'
      }
    )
  }
  setName(inputName){
    this.setState(
      {
        name : inputName.target.value
      }
    )
  }
  setNim(inputNim){
    this.setState(
      {
        nim : inputNim.target.value
      }
    )
  }
  render(){
    let pengunjung = ''
    if(this.state.statusLogin == 'login'){
      pengunjung = 'hello pengunjung'
    }else{
      pengunjung = 'silahkan login'
    }
    return(
      <div>
        <Header pengguna = {this.state.pengguna} jumlahPengguna = {this.state.jumlah_pengguna} incrementPengguna = {this.incrementPengguna} pengunjung={pengunjung} logoutPengguna = {this.logoutPengguna}/>
        <Content name={this.state.name} nim={this.state.nim} setName={this.setName} setNim={this.setNim}/>
      </div>
    )
  }
}
export default App