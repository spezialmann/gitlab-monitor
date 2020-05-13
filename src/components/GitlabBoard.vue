<template>
    <v-container>

        <v-row>
            <v-col v-for="project in projects" :key="project.id">
                <v-card
                        class="v-card v-card--shaped v-sheet theme--light elevation-7"
                        max-width="400"
                >
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline">{{project.name}}</v-list-item-title>
                            <v-list-item-subtitle>{{project.pipe.updated_at_format}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-btn v-if="project.pipe.status === 'success'" class="ma-2 success" dark
                               :href="project.pipe.web_url" target="_blank" :title="project.pipe.status">
                            {{project.pipe.ref}}
                            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                        </v-btn>
                        <v-btn v-else-if="project.pipe.status === 'failed'" class="ma-2 error" dark
                               :href="project.pipe.web_url" target="_blank" :title="project.pipe.status">
                            {{project.pipe.ref}}
                            <v-icon dark right>mdi-close-circle</v-icon>
                        </v-btn>
                        <v-btn v-else class="ma-2 warning" dark :href="project.pipe.web_url" target="_blank"
                               :title="project.pipe.status">
                            {{project.pipe.ref}}
                            <v-icon dark right>mdi-alert-circle</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import axios from 'axios'
    import project_list from './projects.json'

    export default {
        name: 'GitlabBoard',

        data: () => ({
            gitlab_url: process.env.VUE_GITLAB_URL,
            gitlab_token: process.env.VUE_GITLAB_TOKEN,
            projects: project_list
        }),
        mounted() {
            this.projects.forEach(function callback(currentObject) {
                axios.get('/projects/' + currentObject.id + '/pipelines')
                    .then(res => {
                        let anz = res.data.length
                        //console.log("ANZ: " + anz)
                        if (anz > 0) {
                            res.data.some(function (pipeline) {
                                let retVal = false;
                                (pipeline.ref === 'develop') ? retVal = true : retVal = false;
                                if (retVal) {
                                    //console.log(pipeline)
                                    let datum = new Date(pipeline.updated_at)
                                    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
                                    pipeline.updated_at_format = datum.toLocaleDateString('de-DE', options) + " " + datum.toLocaleTimeString('de-DE')
                                    currentObject.pipe = pipeline
                                }
                                return retVal
                            })
                        }
                    })
                    .catch(error => console.log(error))
            });
            //console.log(this.projects)
        }
    }
</script>
