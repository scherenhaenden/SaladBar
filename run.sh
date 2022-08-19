#RUN ANGULAR
#Get current pwd
CURRENT_DIR=$(pwd)

echo $CURRENT_DIR


OUTPUT="${CURRENT_DIR}/output"
OUTPUT_BE="${OUTPUT}/SaladBarBackEnd"
OUTPUT_FE="${OUTPUT}/SaladBarFrontEnd"

export ASPNETCORE_ENVIRONMENT=Development

http-server $OUTPUT_FE --cors --port 4200 & dotnet $OUTPUT_BE/SaladBarBackEnd.dll --urls=https://localhost:7288/
#--project 
#--server.urls http://localhost:4200

