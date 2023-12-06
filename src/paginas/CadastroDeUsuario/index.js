import React from 'react'
import styles from './CadastroDeUsuario.module.css'
import { useState } from 'react';

function CadastroUsuario() {

    const [nomeUsuario, setNomeUsuario] = useState("")
    const [emailUsuario, setEmailUsuario] = useState("")
    const [senhaUsuario, setSenhaUsuario] = useState("")
    const [senhaUsuarioConfirmada, setSenhaConfirmada] = useState("")

    function limparCampos() {
        console.log('limpando')
        setEmailUsuario('')
        setNomeUsuario('')
        setSenhaUsuario('')
        setSenhaConfirmada('')
    }
    function salvarUsuario(nomeUsuario, emailUsuario, senhaUsuario) {

        if (validacaoEmail(emailUsuario) == true) {

            alert("Usuario Cadastrado com Sucesso")
            let usuario = { nomeUsuario, emailUsuario, senhaUsuario }
            console.log(usuario)
            localStorage.setItem("usuario", JSON.stringify(usuario))
            limparCampos()
        } else {
            alert("Confira o Campo Email")
        }
    }

    function validacaoEmail(emailUsuario) {

        if (emailUsuario.includes('@')) {
            return true
            console.log("True")
        } else {
            return false
            console.log("False");
        }
    }

    function validacaoSenha(senhaUsuario, senhaUsuarioConfirmada) {
        if (senhaUsuario !== senhaUsuarioConfirmada) {
            alert("As senhas não são iguais")
        } else {
            salvarUsuario(nomeUsuario, emailUsuario, senhaUsuario)
        }
    }


    return (
        <div className={styles.container}>
            <h1>Se cadastre no nosso site</h1>
            <form className={styles.formulario}>

                <label>Nome:</label>
                <br />
                <input
                    type='text'
                    name='nomeUsuario'
                    value={nomeUsuario}
                    onChange={(e) => setNomeUsuario(e.target.value)}
                ></input>
                <br />

                <label>Email:</label>
                <br />
                <input
                    type='email'
                    id='emailUsuario'
                    name='email'
                    value={emailUsuario}
                    onChange={(e) => setEmailUsuario(e.target.value)}
                ></input>
                <br />


                <label>Senha:</label>
                <br />
                <input
                    type='password'
                    name='senhaUsuario'
                    value={senhaUsuario}
                    onChange={(e) => setSenhaUsuario(e.target.value)}
                ></input>
                <br />

                <label>Confirmação da Senha:</label>
                <br />
                <input
                    type='password'
                    name='senhaUsuarioConfirmada'
                    value={senhaUsuarioConfirmada}
                    onChange={(e) => setSenhaConfirmada(e.target.value)}
                ></input><br />
                <input type="button" value="Cadastrar"
                    onClick={() => validacaoSenha(senhaUsuario, senhaUsuarioConfirmada)} />

            </form>
        </div>
    );
}

export default CadastroUsuario;