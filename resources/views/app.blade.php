<!DOCTYPE html>
<html lang="en" dir="ltr" class="scroll-smooth focus:scroll-auto" data-theme="light">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- inject:css-->
    <link rel="stylesheet" href="{{ asset('backend/vendor_assets/css/apexcharts.min.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/vendor_assets/css/apexcharts.min.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/vendor_assets/css/apexcharts.min.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/vendor_assets/css/apexcharts.min.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/vendor_assets/css/apexcharts.min.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/vendor_assets/css/apexcharts.min.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/css/tailwind.css') }}">
    <!-- endinject -->

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class=" bg-white [&.dark]:bg-main-dark font-jost relative text-[15px] font-normal leading-[1.5] m-0 p-0">
    @inertia

    <!-- inject:js-->
    <script src="{{ asset('backend/vendor_assets/js/apexcharts.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/datepicker-full.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/fslightbox.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/index.global.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/mixitup.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/moment.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/nouislider.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/quill.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/svg-pan-zoom.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/svgMap.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/tw-elements.umd.min.js') }}"></script>
    <script src="{{ asset('backend/vendor_assets/js/yscountdown.min.js') }}"></script>
    <script src="{{ asset('backend/theme_assets/js/apex-custom.js') }}"></script>
    <script src="{{ asset('backend/theme_assets/js/full-calendar.js') }}"></script>
    <script src="{{ asset('backend/theme_assets/js/googlemap-init.js') }}"></script>
    <script src="{{ asset('backend/theme_assets/js/main.js') }}"></script>
    <script src="{{ asset('backend/theme_assets/js/svgMapData.js') }}"></script>
    <!-- endinject-->
</body>

</html>