# Kg Icons

> Laravel package of some sets of SVG Icons prepared in blade template for Kgaming Internal use

## Install

`composer require kg/icons` to install the package, and execute publish from artisan `php artisan vendor:publish --provider="Kg\Icons"`

Load javascript files published in your template using this package `<script src="/kgicons/kgicons.js">`. For additional styling create css selector using `.kgicons` the class is already inside class props of the svg icon.

## Available Icon sets

These icon sets are available through the component, use it with `<x-kgicon::hero|majestic|etc></x-kgicon::hero>`

- [x] `hero` Heroicons
- [x] `majes` Majesticicons
- [ ] `remix` Remixicons

## Usage and Props

After including javascript file in the blade template, the component will be available to be use in the format of `<x-kgicon::{provider} name="o:user" size=48></x-kgicon::{provider}>`. `kgicon` will be the package namespace, while `name` and `size` is the least of props should be defined while using the component.




## Upstreams

Icon providers used in this component stored as submodule repo inside `/resources/upstreams/`

- https://github.com/tailwindlabs/heroicons
- https://github.com/halfmage/majesticons
- https://github.com/Remix-Design/remixicon

## Development tools

A tool named `kgicon-cli` is included in the repo, dev using `golang` and the build is for `macos`, for other operating system please build this tool after cloning its repo at https://github.con/kaisargaming/tool-kgicon-cli.

Currently `kgicon-cli` provides two basic command which are;

- `kgicon-cli prep {hero|majestic}`, this command will basically prepares the icon files from upstream repository and varied in the provider will copy, rename and adjust target directory inside `resources/providers/`

- `kgicon-cli createlist resources/provider/{hero|majestic}` will create a `json` formatted file in the `resources/js` based on the provider code eg. `hero.json`, it can be used to loop through the icon names for documentation or cheatsheet.

The files produced is going to be published during `artisan vendor:publish` command. So in any update, the main Laravel App should `composer update` and reexecute `vendor:publish`.