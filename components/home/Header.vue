<template>
    <div class="main">
        <div class="hero container text-center">
            <div class="text-block">
                <p class="text-pink overline" data-aos="fade-right">OPEN SOURCE DECLARATIVE<br/>DATA ORCHESTRATION</p>
                <h1 data-aos="fade-right">Simple and fast orchestration without Python dependency hell<span class="dot">.</span></h1>
                <a href="https://demo.kestra.io/ui/login?auto" target="_blank" class="btn btn-secondary me-2" data-aos="zoom-in">
                    <Console /> Try the live demo
                </a>
                <a href="#" class="btn btn-primary" data-aos="zoom-in" data-bs-toggle="modal" data-bs-target="#home-intro">
                    <LightningBolt /> Get started
                </a>
            </div>
            <HeaderAnimation class="animation"/>
        </div>

        <div class="container text-center">
            <p class="companies-title" data-aos="zoom-in">
                Loved & trusted by leading enterprises worldwide
            </p>

        </div>

        <div class="container-fluid pt-4 pb-4">
            <Companies />
        </div>
    </div>
    <div v-on="{ 'show.bs.modal': () => videoVisible = true, 'hidden.bs.modal': () => videoVisible = false }" class="modal modal-full fade" id="home-intro" tabindex="-1" aria-labelledby="home-intro" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="video-responsive">
                        <iframe v-if="videoVisible" width="560" height="315" src="https://www.youtube.com/embed/h-P0eK2xN58?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Magnify from "vue-material-design-icons/Magnify.vue";
    import Console from "vue-material-design-icons/Console.vue"
    import LightningBolt from "vue-material-design-icons/LightningBolt.vue"
    import GithubButton from "../layout/GithubButton.vue";
    import Companies from "../layout/Companies.vue";
    import HeaderAnimation from './HeaderAnimation.vue';

    export default {
        components: {Console, Magnify, LightningBolt, GithubButton, Companies, HeaderAnimation},
        data() {
            return {
                videoVisible: false
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    .main {
        background: url("/landing/home/header-bg.svg") center no-repeat;
        background-size: 100% 100%;

        > * {
            z-index:2;
            position: relative;
        }

        color: var(--bs-white);
        padding-top: 80px;
        margin-top: -80px;

        .hero {
            display: flex;
            margin: 0;
            padding-top: calc(var(--spacer) * 4);
            align-items: center;
            justify-content: center;

            .text-block {
                text-align: left;
                width: 25vw;
                display: flex;
                flex-direction: column;
                gap: $spacer;
                justify-items: left;

                > * {
                    margin-left: 0;
                }

                .overline {
                    &::after {
                        content: "";
                        position: relative;
                        top: calc(var(--spacer) / 2);
                        width: 15%;
                        height: 3px;
                        background: var(--bs-pink);
                        display: block;
                    }
                }

                a {
                    display: block;
                    width: 60%;
                }

                h1 {
                    font-size: $h2-font-size;
                }
            }

            .animation {
                position: relative;
                width: 50vw;
            }

            @include media-breakpoint-down(sm) {
                flex-direction: column;

                .text-block {
                    width: 80vw;

                    p.overline {
                        margin: 0 auto;
                        font-size: $font-size-sm;

                        &::after {
                            display: none !important;
                        }
                    }

                    h1 {
                        font-size: 1.625rem;

                        .dot {
                            font-size: 2.7rem;

                            line-height: 0;
                        }
                    }
                }
            }
        }

        .companies-title {
            position: relative;

            &:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 2.5rem;
                display: inline-block;
                height: 2px;
                width: 51px;
                background: var(--bs-pink);
            }
        }

        .overline {
            color: #BAE6FE;
        }
    }
</style>
