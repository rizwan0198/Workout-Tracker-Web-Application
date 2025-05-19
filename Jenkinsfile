pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/rizwan0198/Workout-Tracker-Web-Application.git'
            }
        }

        stage('Build with Docker Compose') {
            steps {
                sh 'cd $WORKSPACE && docker compose -p jenkins-workout -f docker-compose.yml up --build -d'

                
            }
        }
    }
}
