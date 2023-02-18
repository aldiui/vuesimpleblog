<template>
    <div>
        <!-- Page Header-->
        <header class="masthead" style="background-image: url('/img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>
                                {{ data.title }}
                            </h1>
                            <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                            <span class="meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on August 24, 2022
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <button @click="deleteBlog(data.id)" class="btn btn-danger text-uppercase">Delete Blog</button>
                        <RouterLink :to="'/blogs/' + data.id + '/edit'" class="btn btn-warning ms-4 text-uppercase"> Edit Blog </RouterLink>
                        <p>
                            {{ data.body }}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {},
        };
    },

    mounted() {
        this.getBlog(this.$route.params.id);
    },

    methods: {
        getBlog(id) {
            const array = JSON.parse(localStorage.getItem('blogs'));
            const data = array.filter((item) => item.id == id);

            this.data = data[0];
        },

        // async getBlog(id) {
        //     const res = await this.axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

        //     this.data = res.data;
        // },

        deleteBlog(id) {
            const array = JSON.parse(localStorage.getItem('blogs'));
            const indexArray = array.findIndex((item) => item.id == id);

            array.splice(indexArray, 1);
            localStorage.setItem('blogs', JSON.stringify(array));
            this.$router.push({ name: 'blogs' });
        },
    },
};
</script>
