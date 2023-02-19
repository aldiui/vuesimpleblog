<template>
    <div>
        <div class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white" style="background-image: url('/img/post-sample-image.jpg')">
            <div class="p-5">
                <h1 class="mb-3 h2 p-5 m-5 text-dark">Simple Blog</h1>
            </div>
        </div>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-12 mb-3">
                    <RouterLink to="/blogs/add" class="btn btn-primary">Add Blog</RouterLink>
                </div>
                <div class="col-lg-6"  v-for="(data, index) of blogs" :key="'index-blogs-' + index">
                    <div class="card mb-3">
                        <div class="card-header">
                            <RouterLink :to="'/blogs/' + data.id">
                                <div class="card-title text-center text-dark">{{ data.title }}</div>
                            </RouterLink>
                        </div>
                        <div class="card-body">
                            <p>{{ data.body.slice(0, 80) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
        };
    },

    mounted() {
        // this.getData();
        if (localStorage.getItem('blogs') == null) {
            localStorage.setItem(
                'blogs',
                JSON.stringify([
                    {
                        id: 1,
                        title: 'sunt aut facere',
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.',
                    },
                    {
                        id: 2,
                        title: 'qui est esse',
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.',
                    },
                    {
                        id: 3,
                        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.',
                    },
                    {
                        id: 4,
                        title: 'eum et est occaecati',
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.',
                    },
                ])
            );
        } else {
            this.blogs = JSON.parse(localStorage.getItem('blogs'));
        }
    },

    // methods: {
    //     async getData() {
    //         const res = await this.axios.get('https://jsonplaceholder.typicode.com/posts');

    //         // this.blogs = res.data;
    //         var temp_array = res.data;
    //         this.blogs = temp_array.filter((item) => {
    //             return item.id > 90;
    //         });
    //     },
    // },
};
</script>
