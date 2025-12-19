pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/hmishra87/node-website.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-website .'
            }
        }

        stage('Deploy Website') {
            steps {
                sh '''
                docker rm -f node-web || true
                docker run -d --name node-web -p 8000:3000 node-website
                '''
            }
        }
    }
}
