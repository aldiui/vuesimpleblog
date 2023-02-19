<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">BlogUI</a>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/blogs" class="nav-link">Blogs</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link">About</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <RouterView />

    <footer class="bg-light text-center text-white">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: Social media -->
            <section class="mb-4">
                <div class="d-flex justify-content-center">
                    <!-- Facebook -->
                    <a class="btn text-white btn-floating m-1 d-flex justify-content-center align-items-center" style="background-color: #3b5998" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                    <!-- Instagram -->
                    <a class="btn text-white btn-floating m-1 d-flex justify-content-center align-items-center" style="background-color: #ac2bac" href="#!" role="button"><i class="fab fa-instagram"></i></a>

                    <!-- Github -->
                    <a class="btn text-white btn-floating m-1 d-flex justify-content-center align-items-center" style="background-color: #333333" href="#!" role="button"><i class="fab fa-github"></i></a>
                </div>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3 bg-secondary">
            © {{ new Date().getFullYear() }} Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">Aldiui</a>
        </div>
        <!-- Copyright -->
    </footer>
</template>
