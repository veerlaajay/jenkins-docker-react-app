node {   
    stage('Clone repository') {
        git credentialsId: 'Githubcredentials', url: 'https://github.com/CloudWithRaghu/jenkins-react-app.git'
    }
    
    stage('Build image') {
       dockerImage = docker.build("cloudwithraghu/app:latest")
    }
    
 stage('Push image') {
        withDockerRegistry([ credentialsId: "dockerhubcredentials", url: "" ]) {
        dockerImage.push()
        }
    }    
 stage('Run Docker container on Jenkins Server itself') {
        sh "docker run -d -p 80:80 cloudwithraghu/app:latest"
 
        }
}
