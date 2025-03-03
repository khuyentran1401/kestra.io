<template>
    <div id="nav-toc-global" class="bd-toc mb-4">

        <template v-if="generated.length > 0">
            <button
                class="btn d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#tocContents"
                :aria-expanded="tableOfContentsExpanded"
                aria-controls="tocContents"
                @click="tableOfContentsExpanded = !tableOfContentsExpanded"
            >
                Table of Contents
                <ChevronUp v-if="tableOfContentsExpanded"/>
                <ChevronDown v-else/>
            </button>

            <div class="collapse bd-toc-collapse" id="tocContents">
                <slot name="header"></slot>
                <strong class="d-none d-lg-block h6 my-2 ms-3">Table of Contents</strong>
                <hr class="d-none d-lg-block my-2 ms-3">
                <nav id="nav-toc">
                    <ul>
                        <template v-for="item in generated" >
                            <li v-if="item.depth > 1 && item.depth < 6" @click="closeToc">
                                <a :href="'#' + item.id" :class="'depth-' + item.depth">{{ item.text }}</a>
                            </li>
                        </template>
                    </ul>
                </nav>
            </div>
        </template>

        <div class="d-none d-lg-block mt-4">
            <strong class="h6 my-2 ms-3">Contribute</strong>
            <hr class="my-2 ms-3">
            <div>
                <nav>
                    <ul>
                        <li v-if="page.editLink !== false">
                            <a :href="editLink" target="_blank"><Github /> Edit this page</a>
                        </li>
                        <li>
                            <a href="https://kestra.io/slack" target="_blank"><Slack /> Join us on Slack</a>
                        </li>
                        <li>
                            <a href="https://github.com/kestra-io/kestra" target="_blank"><Github /> GitHub</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/kestra_io" target="_blank"><twitter /> Twitter</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/kestra" target="_blank"><linkedin /> LinkedIn</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Slack from "vue-material-design-icons/Slack.vue";
    import Github from "vue-material-design-icons/Github.vue";
    import Linkedin from "vue-material-design-icons/Linkedin.vue";
    import Twitter from "vue-material-design-icons/Twitter.vue";
    import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
    import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
</script>

<script>
    export default {
        props: {
            page: {
                type: Object,
                required: true
            },
        },
        data() {
            return {
                tableOfContentsExpanded: false
            }
        },
        computed: {
            editLink() {
                return `https://github.com/kestra-io/kestra.io/edit/main/content/${this.page._file}`;
            },
            generated() {
                const recursive = (links) => {
                    const result = [];

                    for (const item of links) {
                        result.push(item);

                        if (item.children) {
                            result.push(...recursive(item.children));
                        }
                    }

                    return result;
                }

                return recursive(this.page.body.toc.links);
            }
        },
        methods: {
            closeToc() {
                this.tableOfContentsExpanded = false;
                document.getElementById('tocContents').classList.remove("show");
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    .bd-toc {
        transition: all ease 0.2s;
        transform: translateX(0);
        @include media-breakpoint-up(lg) {
            position: sticky;
            top: 5rem;
            right: 0;
            z-index: 2;
            height: subtract(100vh, 7rem);
            overflow-y: auto;
        }

        > .btn.d-lg-none {
            color: $black;
            font-weight: 900;
            font-size: $font-size-sm;
            background-color: $white;
            box-shadow: $box-shadow-sm;
        }

        nav {
            @include font-size(.875rem);

            ul {
                padding-left: .75rem;
                margin-bottom: 0;
                list-style: none;

                li {
                    a {
                        border-left: .125rem solid var(--bs-gray-200);
                        padding-left: 0.75rem;

                        @for $i from 2 through 6 {
                            &.depth-#{$i} {
                                padding-left: calc(.75rem * ($i - 2) +  0.75rem);
                            }
                        }

                        &:hover,
                        &.active {
                            color: var(--bs-primary);
                            font-weight: 500;
                            border-left-color: var(--bs-primary);
                        }
                    }
                }
            }

            a {
                display: block;
                padding: .125rem .75rem;
                color: inherit;
                text-decoration: none;
                color: var(--bs-gray-700);

                code {
                    font: inherit;
                }
            }
        }

        .h6 {
            color: var(--bs-gray-700);
        }

        hr {
            border-color: var(--bs-gray-600);
        }
    }

    .btn {
        border: 1px solid var(--bs-border-color);
        text-align: center;
        width: 100%;
        display: inline-block;
        background: var(--bs-gray-100);
        color: var(--bs-gray-500);
        font-size: $font-size-sm;

        &:hover,
        &:focus,
        &:active,
        &[aria-expanded="true"] {
            background: var(--bs-gray-100);
            color: var(--bs-gray-500);
        }
    }

    .bd-toc-collapse {
        @include media-breakpoint-down(lg) {
            nav {
                padding: $spacer 0;
                border: 1px solid var(--bs-border-color);
                box-shadow: $box-shadow-sm;
                @include border-radius(var(--bs-border-radius));
            }
        }

        @include media-breakpoint-up(lg) {
            display: block !important; // stylelint-disable-line declaration-no-important
        }
    }

    #nav-toc ul li a {
        border-left: none;
    }
</style>