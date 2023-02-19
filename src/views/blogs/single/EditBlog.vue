<template>
    <div>
        <div class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white" style="background-image: url('/img/post-sample-image.jpg')">
            <div class="p-5">
                <h1 class="mb-3 h2 p-5 m-5 text-dark">Edit Simple Blog</h1>
            </div>
        </div>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <form @submit.prevent="submitData">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input v-model="title" type="text" class="form-control" id="title" aria-describedby="title" />
                        </div>
                        <div class="mb-3">
                            <label for="body" class="form-label">Content</label>
                            <textarea rows="8" class="form-control" placeholder="Add Content Here" id="body" v-model="body"> </textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mb-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null,
            title: '',
            body: '',
        };
    },
    mounted() {
        this.getData(this.$route.params.id);
    },
    methods: {
        getData(id) {
            const array = JSON.parse(localStorage.getItem('blogs'));
            const items = array.find((item) => item.id == id);
            // console.log(items);
            this.id = items.id;
            this.title = items.title;
            this.body = items.body;
        },
        submitData() {
            if (this.title != '' && this.body != '') {
                var array = JSON.parse(localStorage.getItem('blogs'));
                const data = {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                };
                const index = array.findIndex((item) => item.id === this.id);
                array[index] = Object.assign({}, array[index], data);
                localStorage.setItem('blogs', JSON.stringify(array));
                this.$router.push({ name: 'blogs' });
            }
        },
    },
};
</script>
