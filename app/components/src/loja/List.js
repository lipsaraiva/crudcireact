import React, { Component } from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class List extends Component {

  //Prepara o estado inicial das variaveis
  constructor(props) {
    super(props);
    this.state = {
        lista: []
    };
  };

  //Carregando os dados de um endpoint remoto utilizando o axios
  componentDidMount () {
    axios.get('http://localhost:8080/api/api_list')
      .then(response => { 
        //Console para consulta
        //console.log(response.data);
        this.setState({lista: response.data.data});
      })
      .catch((error) => console.log('Erro ao recuperar os dados ' + error))
  }

  render() {
    return (
      <section>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>

            {
              //destrinchar a array lista - i = ordem dos itens
              this.state.lista.map((item,i)=>{
                return(
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.nome}</td>
                    <td>{item.preco}</td>
                    <td>{item.descricao}</td>
                    <td>
                      <Link class="btn btn-outline-info" to={"/loja/edit/"+item.id}> Editar </Link>
                      <a onClick={()=>this.onClickDelete(i,item.id)} href="#" class="btn btn-danger"> Excluir </a>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </section>
    )
  }

  //Funcao para deletar um produto - Delete atraves do axios
  onClickDelete(i,id){
    var conf = confirm("Confirma a exclusão deste produto?");
    if(conf == true){
      const urlDelete = "http://localhost:8080/api/api_delete/"+id;
      axios.delete(urlDelete)
      .then((response)=>{
        const res = response.data;
        if(res.success){
          alert(res.message);
          //Retira o produto da lista dinamicamente
          const list = this.state.lista;
          list.splice(i,1);
          this.setState({lista:list});
        }
      })
    }
  }

}
