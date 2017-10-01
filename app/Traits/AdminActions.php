<?php

namespace App\Traits;

trait AdminActions
{
  public function before($user, $ability)
  {
    if($user->isAdmin()) {
      return true;
    }
  }

  protected function errorResponse($message, $code = 401)
  {
    return response()->json(['error' => $message, 'code' => $code], $code);
  }
}
