# GitLab Monitor

Simple Vue.js project to create an GitLab status dashboard

![gitlab-monitor Dashboard](misc/gitlab-monitor.png?raw=true "gitlab-monitor Dashboard")

## Project setup
```
npm install
```

##### Edit .env file
```.env
VUE_APP_GITLAB_URL=https://<YOUR_GITLAB_HOST>
VUE_APP_GITLAB_API=/api/v4
VUE_APP_GITLAB_TOKEN=<YOUR_GITLAB_TOKEN>
```

##### Edit /components/projects.json 
```json
[
  {"id": "2121", "name": "pipe1", "pipe": []},
  {"id": "2119", "name": "pipe2", "pipe": []},
  {"id": "2126", "name": "pipe3", "pipe": []},
  {"id": "2124", "name": "pipe4", "pipe": []},
  {"id": "2091", "name": "pipe5", "pipe": []},
  {"id": "2090", "name": "pipe6", "pipe": []},
  {"id": "2111", "name": "pipe7", "pipe": []}
]
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker section

##### Build Docker image
```
docker build -t spezialmann/gitlab-monitor .
```

##### Run Docker container
```
docker run -it -p 8080:8080 --rm --name gitlab-monitor spezialmann/gitlab-monitor
```
