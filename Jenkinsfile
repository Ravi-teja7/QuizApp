pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Ravi-teja7/QuizApp.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Static website - no build required.'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                cp Index.html /usr/share/nginx/html/
                cp script.js /usr/share/nginx/html/
                cp styles.css /usr/share/nginx/html/
                '''
            }
        }
    }

    post {
        success {
            echo 'QuizApp deployed successfully!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
