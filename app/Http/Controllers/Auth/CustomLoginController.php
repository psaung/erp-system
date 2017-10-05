<?php

namespace App\Http\Controllers\Auth;

use Carbon\Carbon;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Lcobucci\JWT\Parser;
use Illuminate\Support\Facades\DB;

/*
 * This will handy if u use login with Personal Access Token grant type 
 * The draback of personal access token is persoanal access token has 
 * no expire time and it will stay forever.
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
        
        // you can find password grant type client_id and client_secret
        // in DB::table('oauth_clients')
        // DB::table('oauth_clients')->where('2') 
        
        /*
         * $client = DB:table('oauth_clients')->where('2)
         * $client->id
         * $client->secret
         */
		$data = [
            'username' => request('email'),
            'password' => request('password'),
            'client_id' => env('PASSWORD_CLIENT_ID'), // this might be set again if your refresh database migration in env file
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
            'grant_type' => 'password',
        ];
		
		try {
			$response = $client->request('POST', '/oauth/token', ['form_params' => $data]);
            $result = json_decode($response->getBody()->getContents());
            if(Auth::attempt(['email' => request('email'), 'password' => request('password')])) $user = Auth::user();
            $result->role = $user ? $user->role : 'employee'; 
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

        if(is_null($value)) {
            return response()->json(['success' => false, 'error' => 'There is no Bearer Token in Authorization Header'], 401);
        }

        $id = (new Parser())->parse($value)->getClaim('jti');

        // prefer delete rather than revoke becoz it completely all of the access token from
        // oauth_token_users table.
        $token = DB::table('oauth_access_tokens')->find($id);
            // ->update(['revoked' => true]);
        
        if(is_null($token)) {
            return response()->json(['success' => false, 'error' => 'Access Token Mulfunctioned'], 401);
        }

        $token->delete();
       
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
    public function checkAuth(Request $request)
    {
        $value = $request->bearerToken();

        if(is_null($value)) {
            return response()->json(['success' => false, 'error' => [ 'message' => 'There is no Bearer Token in Authorization Header'] ], 401);
        }
        
        try {
            $token= (new Parser())->parse($value);
        } catch(Exception $e) {
            return response()->json(['success' => false, 'error' => [ 'message' => 'Invalid Authentication Token'] ], 401);
        }


        try {
            $id = $token->getClaim('jti');
            $token = DB::table('oauth_access_tokens')->find($id);

            if(is_null($token)) {
                return response()->json(['success' => false, 'error' => [ 'message' => 'Access Token Mulfunctioned' ] ], 401);
            }

            $expires_at = $token->expires_at;

            if($this->checkExpiration($expires_at)) {
                return response()->json(['success' => false, 'error' => [ 'message' => 'Token Expired'] ], 401);
            } else {
                return response()->json(['success'  => true], 200);
            }
        } catch(Exception $e) {
            return response()->json(['success' => false, 'error' => [ 'message' => 'Access Token Mulfunctioned'] ], 401);
        } 
    }

    /*
     * 
     * @param date time
     * @return Boolean
     */ 
    private function checkExpiration($time) 
    {
        
        $time = Carbon::parse($time);
        $now = Carbon::now();
        if($time->lte($now)) {
            return true;
        }
        return false;
    }
}
