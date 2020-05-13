<template>
    <v-app>
        <v-app-bar
                app
                color="blue darken-2"
                dark
        >
            <div class="d-flex align-center">
                <span class="text-uppercase flex display-1 font-weight-thin">Pipelines</span>
            </div>

            <v-spacer></v-spacer>

            <v-btn
                    :href="gitlab_url"
                    target="_blank"
                    text
            >
                <span class="mr-2">Gitlab</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <GitlabBoard/>
        </v-content>
    </v-app>
</template>

<script>
    import GitlabBoard from './components/GitlabBoard';

    export default {
        name: 'App',

        components: {
            GitlabBoard,
        },

        data: () => ({
            gitlab_url: process.env.VUE_APP_GITLAB_URL
        }),
    };
</script>
