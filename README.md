# Creativity in AI voting website
This is a simple website that allows users to vote on three features of creativity on pairs of images. The website is 
built using Nuxt 3 and Tailwind CSS.

It was part of a research project to answer the question whether AI can be creative. The paper that was written based on
the data collected can be found on the [TU-Delft Repository](). The website was used to collect 
data on how people perceive creativity in AI generated images, specifically using images from the 
[Dream-OOD](https://github.com/deeplearning-wisc/dream-ood) model and [IMAGENET](https://www.image-net.org/)
database.



## Setup Nuxt 3 Project
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production
### Nuxt
Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

### PM2 
Run the application using [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)

[Nuxt deployment](https://nuxt.com/docs/getting-started/deployment#pm2)

```bash
# Install pm2
yarn global add pm2

# Start the application
pm2 start ecosystem.config.js
```

[PM2 persistent application](https://pm2.keymetrics.io/docs/usage/startup/)

```bash
# Create a startup script
pm2 startup
# Run the command that is outputted

# Save the current process list for reboot
pm2 save
```

### Nginx
Configure Nginx to serve the application with the following configurations.

#### HTTP
http only:

```nginx
server {
    listen 80;
    server_name [domain name];

    root [project directory]/.output/;

    location / {
        try_files $uri $uri/ @nuxt;
    }

    location @nuxt {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

``` 
#### HTTPS
https and redirect from http to https:

```nginx
server {
    listen 80;
    server_name [domain name];
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name [domain name];

    ssl_certificate [path to certifcate].crt;
    ssl_certificate_key [path to key].key;

    root [project directory]/.output/;

    location / {
        try_files $uri $uri/ @nuxt;
    }

    location @nuxt {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```



## License
Copyright 2024 Jari de Keijzer
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this website/code except in compliance with the License. You may obtain a copy of the License at
https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
