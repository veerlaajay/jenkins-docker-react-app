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

 stage('Stop the container') {
        try {
          sh "docker stop container react-app"
          }
        catch (exc) {
          sh "docker run -d --name react-app -p 80:80 cloudwithraghu/react-app:latest"
     
             }
        }

 }
