node {   
    stage('Clone repository') {
        git credentialsId: 'Githubcredentials', url: 'https://github.com/CloudWithRaghu/jenkins-react-app.git'
    }
    
    stage('Build image') {
       dockerImage = docker.build("cloudwithraghu/react-app-2:latest")
    }
    
 stage('Push image') {
        withDockerRegistry([ credentialsId: "dockerhubcredentials", url: "" ]) {
        dockerImage.push()
        }
    }    

 stage('Kill the previous Container') {
        sh "docker stop container react-app"
 
        }

 stage('Run Docker container on Jenkins Server itself') {
        sh "docker run -d --name react-app -p 80:80 cloudwithraghu/react-app-2:latest"
 
        }
}
