# Kg Icons

> Laravel package of some sets of SVG Icons prepared in blade template for Kgaming Internal use

## Install

`composer require kg/icons` to install the package, and execute publish from artisan `php artisan vendor:publish --provider='Kg\Icons'`

Load javascript files published in your template using this package `<script src="/kgicons/kgicons.js">`. For additional styling create css selector using `.kgicons` the class is already inside class props of the svg icon.

## Available Icon sets

These icon sets are available through the component, use it with `<x-kgicon::hero|majestic|etc></x-kgicon::hero>`

- `hero` Heroicons
- `majes` Majesticicons
- `remix` Remixicons

## Props


## Upstreams

Icon providers used in this component stored as submodule repo inside `/resources/upstreams/`

- https://github.com/tailwindlabs/heroicons
- 
- https://github.com/Remix-Design/remixicon

