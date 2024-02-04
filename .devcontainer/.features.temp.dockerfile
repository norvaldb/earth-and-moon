FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye
COPY --from=jb-devcontainer-features-7cfde69611ec8a3c0a9a4a5a9507022c /tmp/jb-devcontainer-features /tmp/jb-devcontainer-features/
ENV SDKMAN_DIR="/usr/local/sdkman"
ENV JAVA_HOME="/usr/local/sdkman/candidates/java/current"
ENV PATH="/usr/local/share/nvm/current/bin:/usr/local/share/npm-global/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
ENV NODE_VERSION="20.10.0"
ENV YARN_VERSION="1.22.19"
ENV NVM_DIR="/usr/local/share/nvm"
ENV NVM_SYMLINK_CURRENT="true"

ENV SDKMAN_DIR="/usr/local/sdkman"
ENV JAVA_HOME="/usr/local/sdkman/candidates/java/current"
ENV PATH="/usr/local/sdkman/bin:/usr/local/sdkman/candidates/java/current/bin:/usr/local/sdkman/candidates/gradle/current/bin:/usr/local/sdkman/candidates/maven/current/bin:/usr/local/sdkman/candidates/ant/current/bin:${PATH}"
RUN chmod -R 0755 /tmp/jb-devcontainer-features/ghcr.io-devcontainers-features-java-1 \
&& cd /tmp/jb-devcontainer-features/ghcr.io-devcontainers-features-java-1 \
&& chmod +x ./devcontainer-feature-setup.sh \
&& ./devcontainer-feature-setup.sh