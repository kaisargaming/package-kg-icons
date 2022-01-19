@props([
    'name' => 'o:info-circle-line',
    'size' => 24,
    'fill' => 'none' ,
    'stroke' => 'currentColor' ])

@if(substr($name,0,1) == 's')
    @php 
        $fill2 = $fill;
        $fill = $stroke;
        $stroke = $fill2;
    @endphp
@endif

<svg
    id="kgIcon-majestic-{{$name}}"
    data-group="kgicons"
    data-name="majestic:{{$name}}"
    width="{{$size}}"
    height="{{$size}}"
    xmlns="http://www.w3.org/2000/svg"
    {{$attributes->merge(['class' => 'kgicons'])}}
    fill="{{$fill}}" 
    viewBox="0 0 24 24" 
    stroke="{{$stroke}}"
    aria-hidden="true">
</svg>