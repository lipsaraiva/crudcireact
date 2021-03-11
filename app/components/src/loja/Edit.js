import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

  //Prepara o estado inicial das variaveis
  constructor(){
    super()
    this.state = {
      id:0,
      campoNome:"",
      campoPreco:"",
      campoDescricao:"",
      loading: true,
      error: false
    };
  };

  //Carregando os dados de um endpoint remoto utilizando o axios
  componentDidMount(){
    let produtoId = this.props.match.params.id;
    axios.get("http://localhost:8080/api/api_get/"+produtoId)
    .then(response=>{
      const res = response.data
      if (res.success) {
        //Console para consulta
        //console.log(res.data);
        this.setState({
          id:res.data[0].id,
          campoNome:res.data[0].nome,
          campoPreco:res.data[0].preco,
          campoDescricao:res.data[0].descricao,
          loading:false
        })
      }
    })
    .catch(error=>{
      this.setState({ loading: false, error: true });
        //Console para consulta
        //console.error(error); 
    })
  };
 
  render() {
    if (this.state.loading) {
      return(
        <div><h4>Carregando</h4></div>
      )
    }
     
    return (
      <div>
        <h4>Editar Produto: {this.state.id} </h4>
        <hr/>
        <div class="row">
          <div class="col-md-6 mb-3">
						<label for="email">Nome do Produto:</label>
	          <input type="text" class="form-control"
            value={this.state.campoNome}
            onChange={(value)=>this.setState({campoNome:value.target.value})}/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
						<label for="email">Preço:</label>
	          <input type="text" class="form-control"
            value={this.state.campoPreco}
            onChange={(value)=>this.setState({campoPreco:value.target.value})}/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
						<label for="email">Descrição:</label>
	          <input type="text" class="form-control"
            value={this.state.campoDescricao}
            onChange={(value)=>this.setState({campoDescricao:value.target.value})}/>
          </div>
        </div>
        <div class="row">
					<div class="col-md-6 mb-3">
		      	<button onClick={()=>this.onClickUpdate()} class="btn btn-primary btn-block" type="submit">Editar</button>
					</div>
				</div>
      </div>
     );
   }

   //Funcao para editar o produto - Update atraves do axios
   onClickUpdate(){
     const id = this.state.id;
     const baseUrl = "http://localhost:8080/api/api_update/"+id;
     const data = {
       nome: this.state.campoNome,
       preco: this.state.campoPreco,
       descricao: this.state.campoDescricao
     }
     axios.put(baseUrl,data)
     .then(response=>{
       alert(response.data.message);
       window.location.href = "http://localhost:8080/loja/index";
     })
     .catch(error=>{
      alert("Erro: "+ error);
    })
   }

 }
  

