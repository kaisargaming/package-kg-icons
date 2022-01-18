<?php

namespace Kg\Icons;

use Illuminate\Support\ServiceProvider;

class KgIconsServiceProvider extends ServiceProvider
{
    public function register()
    {

    }

    public function boot()
    {
        // Javascript, css, and svg assets
        $this->publishes([
            __DIR__ . '/../resources/js' => public_path('kgicons'),
            __DIR__ . '/../resources/css' => public_path('kgicons'),
            __DIR__ . '/../resources/providers' => public_path('kgicons/ic'),
        ], 'assets');

        // <x-hero::icon /> </x-hero::icon>
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'kgicon');
    }
}