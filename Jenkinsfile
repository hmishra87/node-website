pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-website .'
            }
        }

        stage('Deploy Website') {
            steps {
                sh '''
                echo "Cleaning containers using port 3000..."

                docker ps -q --filter "publish=3000" | xargs -r docker stop
                docker ps -aq --filter "publish=3000" | xargs -r docker rm

                docker rm -f node-web || true

                docker run -d --name node-web -p 8000:3000 node-website
                '''
            }
        }
    }
}
