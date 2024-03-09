<!DOCTYPE html>
<html lang="en" data-theme="dark">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movies</title>
    <link rel="stylesheet" href="{{ asset('frontend/css/output.css') }}" />
</head>

<body class="">
    <div class="ctr rounded-full hidden md:block md:pointer-events-none"></div>
    <div class="cbr rounded-full hidden md:block md:pointer-events-none"></div>
    <div class="cmr rounded-full md:pointer-events-none"></div>
    <section class="section-content-login h-screen flex items-center justify-center">
        <div class="container px-6">
            <div class="flex gap-24">
                <div class="hidden md:w-1/2 z-50 md:flex justify-center items-center">
                    <!-- Asumsi Anda ingin memusatkan logo atau gambar juga -->
                    <img src="/images/brand-auth.png" class="mx-auto w-auto h-auto" alt="" />
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center text-center">
                    <!-- Kelas untuk memusatkan -->
                    <div class="logo mx-auto md:mx-0">
                        <!-- Anda mungkin ingin menambahkan margin di bawah logo -->
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <div class="welcome text-center md:text-start justify-center">
                        <!-- Tambahkan text-center dan margin-bottom -->
                        <h1 class="text-3xl font-bold text-white mt-10">
                            Welcome <span class="text-primary">Back</span>
                        </h1>
                        <p class="text-white pt-3">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form action="" class="w-full pt-5">
                        <!-- Batasi lebar form dengan max-w-xs atau lebar yang diinginkan -->
                        <label class="form-control mb-3">
                            <div class="label">
                                <span class="label-text text-white">Email address</span>
                            </div>
                            <input type="text" placeholder="Email address"
                                class="input w-full bg-white text-gray-800 rounded-xl" />
                        </label>

                        <label class="form-control mb-3">
                            <div class="label">
                                <span class="label-text text-white">Password</span>
                            </div>
                            <input type="password" placeholder="Password"
                                class="input input-bordered w-full bg-white text-gray-800 rounded-xl" />
                        </label>
                        <button class="btn bg-primary text-white w-full hover:bg-primary mt-10 rounded-xl">
                            Start Watching
                        </button>
                        <div class="text-center mt-3">
                            <a href="#"
                                class="text-white mt-4 underline hover:text-primary duration-150 ease-in-out">Create new
                                account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</body>

</html>