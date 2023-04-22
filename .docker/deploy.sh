export BUILD_IMG_TAG=1.0.0

sh .docker/check-docker.sh

cp .docker/Dockerfile ./

docker buildx build \
   --platform=linux/amd64,linux/arm64/v8 \
   --tag mythosma/run-game:$BUILD_IMG_TAG \
   --push -t mythosma/run-game:$BUILD_IMG_TAG .

rm -f Dockerfile
