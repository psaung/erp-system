<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Auth\Access\AuthorizationException;

class ApiController extends Controller
{
    use ApiResponser;

    public function __construct()
    {
        // $this->middleware('auth:api');
    }
    
    /*
     * You can guard any controller action for non admin user in 
     * every derived controller by using this function.
     */
    protected function allowedAdminAction()
    {
        if(Gate::denies('admin-action')) {
            throw new AuthorizationException('This action is unauthorized');
        }
    }
}
