<template>
    <rapi-doc
        spec-url = "/kestra-ee.yml"
        theme="light"
        render-style="view"
        show-header="false"
        show-info="false"
        allow-authentication="false"
        allow-server-selection="false"
        allow-try="false"
        regular-font="Public Sans"
        mono-font="Source Code Pro"
    />
</template>

<script>

    export default {

    }
</script>

<style lang="scss" scoped>
    rapi-doc {
        background: transparent;
        width: 100%;
    }

</style>
