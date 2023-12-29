node {   
    stage('Clone repository') {
        git credentialsId: 'Githubcredentials', url: 'https://github.com/CloudWithRaghu/jenkins-react-app.git'
    }
    
    stage('Build image') {
       dockerImage = docker.build("cloudwithraghu/react-app:latest")
    }
    
 stage('Push image') {
        withDockerRegistry([ credentialsId: "dockerhubcredentials", url: "" ]) {
        dockerImage.push()
        }
    }    

 stage('Kill the previous Container') {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE')
        sh "docker stop container react-app"
 
        }

 stage('Run Docker container on Jenkins Server itself') {
        sh "docker run -d --name react-container -p 80:80 cloudwithraghu/react-app:latest"
 
        }
}
