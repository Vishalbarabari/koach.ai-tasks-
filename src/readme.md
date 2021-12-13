Local Development Setup
If it's not already done, clone the local-traefik repository
$ mkdir -p ${PROJECT_BASE_DIR}/global/common-utils
$ cd ${PROJECT_BASE_DIR}/global/common-utils
$ git clone
Run traefik
$ cd local-traefik
$ make create-traefik-network-once
$ make up
Clone this repository
$ mkdir -p ${PROJECT_BASE_DIR}/${PROJECT_NAME}
$ git clone 
Run the application
$ cd ${PROJECT_NAME}
$ docker-compose up