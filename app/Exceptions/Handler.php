<?php

namespace App\Exceptions;

use Exception;
use App\Traits\ApiResponser;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    use ApiResponser;

    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        /*
        // echo csrf_token();
        // var_dump($exception);
        var_dump($exception instanceof AuthenticationException);
        // if the exception is AuthenticationException show this
         */
        if($exception instanceof AuthenticationException) 
        {
            return $this->unauthenticated($request, $exception);
        } 

        if($exception instanceof AuthorizationException)
        {
            return $this->errorResponse($exception->getMessage(), 403);
        }

        if($exception instanceof MethodNotAllowedHttpException)
        {
            return $this->errorResponse('The specified method for the request is invalid', 405);
        }

        if($exception instanceof TokenMismatchException)
        {
            return $this->errorResponse('Token mismatch', 401);
        }

        // return $this->errorResponse('Unexpected Exception. Try later', 500);
        return parent::render($request, $exception);
    }

    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        return $this->errorResponse('Unauthenticated', 401);

        // we will only show json response and restrict to redirect login view
        /* if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }
        
        return redirect()->guest(route('login'));
         */
    }

    /**
     * Create a response object from the given validation exception
     *
     * @param \Illuminate\Validation\ValidationException $e
     * @param \Illuminate\Http\Request $request
     * @return \Symfony\Component\HttpFoundation\Response
    protected function convertValidationExceptionToResponse(ValidationExcpetion $e, $request)
    {
        $errors = $e->validator->errors()->getMessages();

        return $this->errorResponse($errors, 422);
    }
     */
}
