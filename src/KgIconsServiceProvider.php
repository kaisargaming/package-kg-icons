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
        // Javascript & SVG assets
        $this->publishes([
            __DIR__ . '/../resources/assets' => public_path('heroicons/assets'),
            __DIR__ . '/../resources/heroicons/optimized' => public_path('heroicons/icons'),
        ], 'assets');

        // <x-hero::icon /> </x-hero::icon>
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'hero');
    }
}