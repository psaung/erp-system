# AWITD ERP System

An Erp system with laravel restful api and reactjs.

### Features

1. laravel passport for oauth 

### Config
1. Database name => erp
2. Database username => root
3. Database password => root 

### Laravel Config

#### laravel passport
```php
<?php
/* install passport by typing this command in your terminal*/
composer require lararvel/passport
/* register this provider in your config/app.php */
Laravel\Passport\PassportProvider::class,
/* setup migration */
php artisan migrate
?>
```
### Migration

Create pivot table for user and department
```
php artisan make:migration user_department_table --create=user_department
```

```
php artisan migrate:refresh --seed
```
