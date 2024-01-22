node {   
    stage('Clone Github repository') {
        git credentialsId: 'github-creds', url: 'https://github.com/veerlaajay/jenkins-docker-react-app.git'
    }
    
    stage('Build image') {
       dockerImage = docker.build("veerlaajay/react-app200:latest")
    }
    
    stage('Push image') {
       withDockerRegistry([ credentialsId: "dockerhub-credentials", url: "" ]) {
       dockerImage.push()
        }
    }    

    stage('Stop and Kill existing container with same name if any') {
        sh "docker rm -f react-app"
    }
        
    stage('Run the container Locally on the Jenkins server') {
        sh "docker run -itd --name react-app -p 80:80 veerlaajay/react-app200:latest"
     
    }
  }
