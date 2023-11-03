# First stage: Install dependencies and add code
#==================================================================================================
FROM node:21-bookworm-slim as builder

# Set working directory
WORKDIR /home/node/

# Install node dependencies
COPY ./config/package.json .
RUN npm install && npm cache clean --force

# Copy the other configurations and HTML templates
COPY ./config  .
COPY ./index.html  .

# Copy all the code into the src folder
COPY ./src ./src

# Development stage: Build image for development environment
#==================================================================================================
FROM builder as development

# Launch application server in development mode
CMD ["npm", "run", "dev", "--", "--host"]

# Production stage: Build image for production environment
#==================================================================================================
FROM builder as production

# Compile the scripts for a production build
CMD ["npm", "run", "build"]