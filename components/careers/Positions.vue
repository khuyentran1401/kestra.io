<template>
    <div class="container" id="positions">
        <Section
            title="Our open positions"
            subtitle="It's a Match"
            baseline="We are looking for talented open-source enthusiasts working remotely from anywhere. Browse our open positions, find a job you love, say goodbye to imposter syndrome, and apply."
        >
            <ul class="list-unstyled">
                <li data-aos="fade-left">
                    <NuxtLink class="rounded-3 shadow-sm" href="/careers/senior-full-stack-engineer">
                        <span>
                         Senior Full-Stack Engineer
                        </span>
                        <span class="badge badge text-bg-primary">Engineering</span>
                    </NuxtLink>
                </li>
            </ul>

        </Section>
    </div>
</template>

<script>
    import Section from '../../components/layout/Section.vue';

    export default {
        components: {Section}
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    li {
        a {
            display: flex;
            font-weight: bold;
            border: 1px solid var(--bs-border-color);
            padding: 0.75rem 1.25rem;
            box-shadow: $box-shadow-sm;

            span:first-child {
                flex-grow: 1;
            }
        }
    }

</style>