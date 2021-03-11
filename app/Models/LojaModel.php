<?php

namespace App\Models;
use CodeIgniter\Model;

class LojaModel extends Model {

    protected $table = 'produtos';
    protected $primaryKey = 'id';
    protected $allowedFields = ['nome', 'preco', 'descricao'];

    //Funcao nativa CI4
    //Para utilizar os campos created_at, updated_at e deleted_at da tabela
    protected $useTimestamps = true;
    protected $useSoftDeletes = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $deletedField = 'deleted_at';
    //Fim - Funcao nativa CI4

}