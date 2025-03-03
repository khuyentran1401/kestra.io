<template>
    <div class="container">
        <BlogsList v-if="slug === '/blogs/'" :blogs="page"/>

        <div v-else class="container bd-gutter bd-layout margin">
            <article class="bd-main order-1" v-if="page" :class="{'full': page.rightBar === false}">
                <ContentRenderer :value="page">
                    <div class="bd-title">
                        <p class="subtitle" data-aos="fade-right">
                            Community > Blog
                        </p>
                        <h1 data-aos="fade-left">{{ page.title }}</h1>
                    </div>

                    <NavToc data-aos="fade-zoom" :page="page">
                        <template #header>
                            <BlogDetails :blog="page"/>
                        </template>
                    </NavToc>

                    <div class="bd-content">
                        <img data-aos="fade-right" class="mb-5 rounded-3" :alt="page.title" :src="page.image"/>

                        <ContentRendererMarkdown
                            data-aos="fade-zoom"
                            class="bd-markdown"
                            :value="page"
                            data-bs-spy="scroll"
                            data-bs-target="#nav-toc"
                        />
                    </div>
                </ContentRenderer>
            </article>
        </div>

        <div class="bottom">
            <LayoutBlogs v-if="slug !== '/blogs/'" />
            <LayoutNewsletter />
        </div>
    </div>
</template>

<script setup>
    import NavToc from "~/components/docs/NavToc.vue";
    import BlogDetails from "~/components/blogs/BlogDetails.vue";

    const route = useRoute()
    const slug = "/blogs/" + (route.params.slug instanceof Array ? route.params.slug.join('/') : route.params.slug);
    let page;
    if (slug === "/blogs/") {
        const {data} = await useAsyncData(
            `Blog-Page-List`,
            () => queryContent("/blogs/").find()
        );

        page = data;

        useHead({
            title: "Insights & News on Data Orchestration",
            description: "Explore the Kestra Blog for the latest articles, insights, product updates & engineering deep dives."
        })
    } else {
        const {data, error} = await useAsyncData(`Blog-Page-Item-${slug}`, () => {
            try {
                return queryContent(slug).findOne();
            } catch (error) {
                throw createError({statusCode: 404, message: error.toString(), data: error, fatal: true})
            }
        });

        if (error && error.value) {
            throw error.value;
        }

        page = data;

        useContentHead(page)
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variable";
    @import '../../assets/styles/docs.scss';


    .bd-layout {
        display: block;
    }

    :deep(.subtitle) {
        font-size: $font-size-sm;
        color: var(--bs-primary);
        font-family: var(--bs-font-monospace);
        font-weight: 800;
        text-transform: uppercase;
        max-width: 700px;
        .bd-gutter & {
            margin: 0 auto;

        }

        &:after {
            content: '';
            position: absolute;
            margin-top: calc($font-size-sm / 1.5);
            margin-left: $spacer;
            display: inline-block;
            height: 2px;
            width: 51px;
            background: var(--bs-pink);
        }
    }

</style>