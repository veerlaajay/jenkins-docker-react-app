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
        sh "docker stop container react-container"
 
        }

 stage('Run Docker container on Jenkins Server itself') {
        sh "docker run -d --name react-container -p 80:80 cloudwithraghu/react-app:latest"
 
        }
}
