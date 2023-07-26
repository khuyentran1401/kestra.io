<template>
    <VueLottie
        ref="lottie"
        class="animation"
        v-if="animationData"
        :animation-data="animationData"
        :assets-path="assetsPath"
        :loop="false"
        :auto-play="false"
        @complete="complete"
        @domLoaded="play"
    />
</template>

<script>
    import VueLottie from '../layout/VueLottie';
    import * as animationData from './animation.json';

    export default {
        components: {VueLottie},
        data() {
            return {
                assetsPath: undefined,
                animationData: undefined
            }
        },
        mounted() {
            this.transform();
        },
        methods: {
            complete() {
                this.transform();
                this.$refs.lottie.init();

            },
            play() {
                this.$refs.lottie.play();
            },
            transform() {
                const data = {...animationData.default};
                this.animationData = data;
            }
        }
    }
</script>
