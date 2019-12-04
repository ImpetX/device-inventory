# Base image
FROM node:12.13.1-alpine3.10

# runs command on the existing layer
RUN mkdir /app

# set the working directory
WORKDIR /app

# copy the files from the host to the image filesystem
ADD . /app

# provide defaults for an executing container
CMD ["npm start"]

# configuring container to run as an executable
ENTRYPOINT [ "sh", "-c" ]