pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning QuizApp repository'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                sudo cp Index.html /usr/share/nginx/html/
                sudo cp Script.js /usr/share/nginx/html/
                sudo cp Styles.css /usr/share/nginx/html/
                '''
            }
        }
    }
}
