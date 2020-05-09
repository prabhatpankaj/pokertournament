FROM adoptopenjdk/openjdk13
COPY ${project.build.directory}/${project.artifactId}-${project.version}.jar /app.jar
COPY ${project.build.directory}/classes/docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT /entrypoint.sh