import React, { memo } from 'react'

function Form(props){
    return(
        <React.Fragment>
            <h3>Form Isi</h3>
            <form name='formMahasiswa' method='POST'>
                <label>Nim : </label>
                <input id='nim' name='nim' type='text' onChange={props.setNim}/>
                <br/>
                <label>Name : </label>
                <input id='name' name='name' type='text' onChange={props.setName}/>
                <br/>
                <input id='btnSubmit' name='btnSubmit' type='submit' value='Save'/>
            </form>
        </React.Fragment>
    )
}

export default memo(Form)