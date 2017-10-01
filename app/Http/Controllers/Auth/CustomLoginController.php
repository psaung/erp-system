<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

/*
 * This will handy if u use login with Personal Access Token grant type 
// use Illuminate\Support\Facades\DB;
// use Laravel\Passport\Token;
// use Lcobucci\JWT\Parser;
*/

class CustomLoginController extends Controller
{
    private $successStatus = 200;

    /*
     * Custom Login Controller using Password Grant Type 
     * This has token expire time and refresh token
     *
     *
     * return \Illuminate\Http\Response
     */ 
    public function login()
    {
        $client = new Client([
            'base_uri' => env('BASE_HOST'), 
        ]);

		$data = [
            'username' => request('email'),
            'password' => request('password'),
            'client_id' => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
            'grant_type' => 'password',
        ];
		
		try {
			$response = $client->request('POST', '/oauth/token', ['form_params' => $data]);
			
			// TODO: still need to implement error handling
			$result = json_decode($response->getBody()->getContents());
			return response()->json(['success' => true,
			'data' => $result], $this->successStatus);
		} catch(RequestException $e) {
			$result = json_decode($e->getResponse()->getBody()->getContents());
			return response()->json(['success' => false,
			'error' => $result], 401);
		}	
    }

	public function refreshToken()
	{
		$client = new Client([
			'base_uri' => env('BASE_HOST'),
		]);
		
		$data = [
			'client_id' => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
            'grant_type' => 'refresh_token',
			'refresh_token' => request('token'),
		]; 
		
		try {
			$response = $client->request('POST', '/oauth/token', ['form_params' => $data]);
			$result = json_decode($response->getBody()->getContents());
			return response()->json(['success' => true,
			'data' => $result], $this->successStatus);
		} catch(RequestException $e) {
			$result = json_decode($e->getResponse()->getBody()->getContents());
			return response()->json(['success' => false,
			'error' => $result], 401);
		}	
	}


    /*
     * Custom Login Controller using Personal Access Token
     * Caution: there is no token expire scenario in Persoanl Access Token
     *
     * return \Illuminate\Http\Response
    public function login()
    {
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')]))
        {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            $success['roel'] = $user->role;
            return response()->json(['success'=> $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
     */

    /*
     * Logout user
     * TODO: error handling
     *
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $value= $request->bearerToken();
        $id = (new Parser())->parse($value)->getClaim('jti');

        // prefer delete rather than revoke becoz it completely all of the access token from
        // oauth_token_users table.
        $token = DB::table('oauth_access_tokens')->where('id', '=' , $id)->delete();
            // ->update(['revoked' => true]);
        
        $request->session()->flush();

        $request->session()->regenerate();

        return response()->json(['success'=> true], $this->successStatus);
    }

    /*
     * Check the authentication token
     *
     *
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function checkAuth()
    {
        $value = $request->bearerToken();
        $id = (new Parser())->parse($value)->getClaim('jti');


        if(Auth::check()) {
            return response()->json(['success' => true], $this->successStatus);
        } else {
            return response()->json(['error' => 'Invalid Authentication Token'], 401);
        }
    }
}
