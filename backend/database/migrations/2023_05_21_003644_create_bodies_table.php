<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bodies', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->unsignedInteger('index');
            $table->unsignedInteger('idSite');
            $table->foreign('idSite')->references('id')->on('sites')->onDelete('cascade');
            $table->string('type');
            $table->unsignedInteger('idType');
            $table->string('type2');
            $table->unsignedInteger('idType2');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bodies');
    }
};
