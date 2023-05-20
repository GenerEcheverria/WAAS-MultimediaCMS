<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('sites', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->string('name');
            $table->integer('views');
            $table->unsignedBigInteger('idUser'); 
            $table->string('url');
            $table->timestamps(); 

            $table->foreign('idUser')->references('id')->on('users'); 
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sites');
    }
};

