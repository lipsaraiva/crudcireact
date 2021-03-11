<?php 

namespace App\Controllers;

use CodeIgniter\Controller;

class Loja extends Controller
{
    public function index()
    {
        return view('loja');
    }
}