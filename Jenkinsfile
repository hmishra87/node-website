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
                docker rm -f node-web || true
                docker run -d --name node-web -p 3000:3000 node-website
                '''
            }
        }
    }
}
