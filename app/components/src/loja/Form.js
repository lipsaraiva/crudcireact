import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {

  //Prepara o estado inicial das variaveis
  constructor(){
    super()
    this.state = {
      campoNome:"",
      campoPreco:"",
      campoDescricao:""
    }
  }

  render() {
    return (
      <div>
        <h3>Cadastrar Produto</h3>
        <hr/>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">Nome do Produto: {this.state.campoNome}</label>
            <input type="text" name="nome" id="nome" class="form-control" placeholder="Nome" 
            value={this.state.campoNome} 
            onChange={(value)=>this.setState({campoNome:value.target.value})} />
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="email">Preço: {this.state.campoPreco}</label>
	          <input type="text" name="preco" id="preco" class="form-control" placeholder="20,00" 
            value={this.state.campoPreco} 
            onChange={(value)=>this.setState({campoPreco:value.target.value})} />
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="email">Descrição: {this.state.campoDescricao}</label>
	          <input type="text" name="descricao" id="descricao" class="form-control" placeholder="" 
            value={this.state.campoDescricao} 
            onChange={(value)=>this.setState({campoDescricao:value.target.value})} />
          </div>
        </div>

				<div class="row">
					<div class="col-md-6 mb-3">
		      	<button onClick={()=>this.onClicksave()} class="btn btn-primary btn-block" type="submit">Salvar</button>
					</div>
				</div>
      </div>
    )
  }

//Funcao para cadastrar um produto - Create atraves do axios
onClicksave(){
  const baseUrl = "http://localhost:8080/api/api_create"
  const datapost = {
    nome: this.state.campoNome,
    preco: this.state.campoPreco,
    descricao: this.state.campoDescricao
  }
  //Console para consulta
  //console.log(datapost);
  axios.post(baseUrl,datapost)
  .then(response=>{
    alert(response.data.message);
    window.location.href = "http://localhost:8080/loja/index";
  })
  .catch(error=>{
    alert("Erro: "+ error);
  })
}

}