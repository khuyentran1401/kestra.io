<template>
    <div class="card mb-3">
        <div class="card-body">
            <p>
                {{ item.message }}
            </p>
            <div class="footer">
                <img :src="item.profile"  width="50" :alt="item.alt" />
                <span>
                    <a :href="item.link" target="_blank">{{ item.name }}</a><br />
                    {{ item.designation }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object
            }
        }
    }
</script>
