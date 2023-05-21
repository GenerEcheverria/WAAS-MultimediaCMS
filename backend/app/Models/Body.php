<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Body extends Model
{
    use HasFactory;
    protected  $fillable = [
        'idSite',
        'indexPage',
        'type',
        'idtype',
        'type2',
        'idtype2'
    ];

    protected $table = 'bodies';
}
