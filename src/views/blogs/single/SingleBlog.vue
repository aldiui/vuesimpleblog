<template>
    <div>
        <!-- Page Header-->
        <div class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white" style="background-image: url('/img/post-sample-image.jpg')">
            <div class="p-5">
                <h1 class="mb-3 h2 p-5 m-5 text-dark">{{ data.title }}</h1>
            </div>
        </div>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="mb-3 d-flex gap-1">
                        <button @click="deleteBlog(data.id)" class="btn btn-danger">Delete Blog</button>
                        <RouterLink :to="'/blogs/' + data.id + '/edit'" class="btn btn-warning"> Edit Blog </RouterLink>
                    </div>
                    <p>
                        {{ data.body }}
                    </p>
                </div>
            </div>
        </div>
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
