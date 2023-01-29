<?php

namespace App\Models;

use App\Models\Tags;
use App\Models\Lists;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tasks extends Model
{
    protected $table = 'tasks';
    use HasFactory;

        public function tag()
    {
        // return "s";
        return $this->hasOne(Tags::class,'id', 'tag_id');
    }
        public function list()
    {
        // return "s";
        return $this->hasOne(Lists::class,'id', 'list_id');
    }
}
