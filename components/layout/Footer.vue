
<template>
    <footer>
        <div class="container py-4 py-md-5 px-4 px-md-3">
            <div class="row">
                <div class="col-lg-3 mb-3">
                    <NuxtLink href="/">
                        <img src="/logo-white.svg" height="60" alt="Kestra's logo">
                    </NuxtLink>
                    <p class="mt-2">Open Source Declarative Data Orchestration </p>
                    <Socials class="mt-4 socials" />
                </div>
                <div class="col-lg-9 mb-3">
                    <div class="row">
                        <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                            <h5>Product</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><NuxtLink href="/features">Features</NuxtLink></li>
                                <li class="mb-2"><NuxtLink href="/plugins">Connectors</NuxtLink></li>
                                <li class="mb-2"><NuxtLink href="/enterprise">Enterprise Edition</NuxtLink></li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-2 mb-3">
                            <h5>Solutions</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><NuxtLink href="/use-cases">Usages</NuxtLink></li>
                                <li class="mb-2"><NuxtLink href="/enterprise">For Companies</NuxtLink></li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-2 mb-3">
                            <h5>Community</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><NuxtLink href="/blogs">Blogs</NuxtLink></li>
                                <li class="mb-2"><a href="https://kestra.io/slack" target="_blank">Slack</a></li>
                                <li class="mb-2"><a href="https://github.com/kestra-io" target="_blank">Github</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-2 mb-3">
                            <h5>Docs</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><NuxtLink href="/docs">Documentation</NuxtLink></li>
                                <li class="mb-2"><NuxtLink href="/plugins/">Plugins documentation</NuxtLink></li>
                                <li class="mb-2"><NuxtLink href="/docs/terraform">Terraform provider</NuxtLink></li>
                                <li class="mb-2"><NuxtLink href="/docs/administrator-guide">Administrator guide</NuxtLink></li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-2 mb-3">
                            <h5>Company</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><NuxtLink href="/about-us">About us</NuxtLink></li>
                                <li class="mb-2"><NuxtLink href="/careers">Careers</NuxtLink></li>
                                <li class="mb-2"><NuxtLink href="/contact-us">Contact us</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container bottom py-3">
            <div class="d-flex d-100">
                <div class="flex-grow-1">
                    <p class="mb-0 d-none d-md-inline">
                        © {{  new Date().getFullYear() }} <NuxtLink href="/">Kestra Technologies</NuxtLink>.
                        Developed with <Heart class="text-danger" /> in the 🌎.

                    </p>
                </div>
                <div class="text-end">
                    <p class="mb-0">
                        <NuxtLink href="/privacy-policy">Privacy Policy</NuxtLink>
                        /
                        <NuxtLink href="/cookie-policy">Cookie Policy</NuxtLink>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Socials from "./Socials.vue";
    import Heart from "vue-material-design-icons/Heart.vue";

    export default {
        components: {Heart, Socials},
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    footer {
        position: relative;
        background-color: $purple-24;
        font-size: var(--bs-font-size-sm);

        h5, a, p{
            color: var(--bs-white);
            font-size: var(--bs-badge-font-size);
        }

        h5 {
            text-transform: uppercase;
            font-weight: bold;
            font-family: var(--bs-font-monospace);
        }

        &:before {
            z-index: 1;
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            content: '';
            background: url("../../assets/styles/layout/footer-halo.svg") no-repeat bottom left;
        }

        .container {
            position: relative;
            z-index: 2;
        }

        .bottom {
            border-top: 1px solid rgba(#FFF, 0.1);
        }

        .socials {
            font-size: calc($font-size-base * 1.4);
        }

        :deep(.socials) a {
            color: var(--bs-white);
        }
    }
</style>