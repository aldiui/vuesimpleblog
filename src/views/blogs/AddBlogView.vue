<template>
    <div>
        <div class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white" style="background-image: url('/img/post-sample-image.jpg')">
            <div class="p-5">
                <h1 class="mb-3 h2 p-5 m-5 text-dark">Add Simple Blog</h1>
            </div>
        </div>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <form @submit.prevent="submitData">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" aria-describedby="title" v-model="title" />
                        </div>
                        <div class="mb-3">
                            <label for="body" class="form-label">Content</label>
                            <textarea rows="8" class="form-control" placeholder="Leave a comment here" id="body" v-model="body"></textarea>
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
            title: '',
            body: '',
        };
    },

    methods: {
        submitData() {
            if (this.title != '' && this.body != '') {
                var array = JSON.parse(localStorage.getItem('blogs'));
                const data = {
                    id: array[array.length - 1].id + 1,
                    title: this.title,
                    body: this.body,
                };

                array.push(data);
                localStorage.setItem('blogs', JSON.stringify(array));
                this.$router.push({ name: 'blogs' });
            }
        },
    },
};
</script>
