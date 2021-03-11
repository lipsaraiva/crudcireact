<?php

namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use App\Models\LojaModel;

class Api extends ResourceController{

    protected $modelName = 'App\Models\LojaModel';
    protected $format = 'json';
    protected $api;
    protected $request;

    public function __construct()
    {
        $this->api = new LojaModel();
        $this->request = \Config\Services::request();
    }

    //Listar os produtos
    public function api_list(){
        try {
            $data = $this->api->findAll();
            $response['data'] = $data;
            $response['success'] = true;
            $response['message'] = "Produtos carregados com sucesso!";
            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }

    //Mostrar somente um produto
    public function api_get($id){
        try {
            $data = $this->api->getWhere(['id' => $id])->getResult();
            if($data){
                $response['data'] = $data;
                $response['success'] = true;
                $response['message'] = "Produto carregado com sucesso!";
            }else{
                $response['success'] = false;
                $response['message'] = "Produto não encontrado!";
            }
            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }

    //Criar um produto
    public function api_create(){
        try {
            $json = $this->request->getJSON();
            $insert['nome'] = $json->nome;
            $insert['preco'] = $json->preco;
            $insert['descricao'] = $json->descricao;
            $this->api->insert($insert);
            $response['success'] = true;
            $response['message'] = "Produto salvo com sucesso!";
            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }

    //Atualizar produto
    public function api_update($id){
        try {
            $json = $this->request->getJSON();
            $update['nome'] = $json->nome;
            $update['preco'] = $json->preco;
            $update['descricao'] = $json->descricao;
            $res = $this->api->update($id,$update);
            $response['res'] = $res;
            $response['success'] = true;
            $response['message'] = "Produto atualizado com sucesso!";
            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }

    //Deletar produto
    public function api_delete($id){
        try {
            $res = $this->api->delete($id);
            $response['res'] = $res;
            $response['success'] = true;
            $response['message'] = "Produto excluído com sucesso!";
            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }
    

}