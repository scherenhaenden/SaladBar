#Get current pwd
CURRENT_DIR=$(pwd)

echo $CURRENT_DIR

# Build 
BE="SaladBarBackEnd"
FE="SaladBarFrontEnd"

BE_DIR="$CURRENT_DIR/$BE"
FE_DIR="$CURRENT_DIR/$FE"

OUTPUT="${CURRENT_DIR}/output"
OUTPUT_BE="${OUTPUT}/SaladBarBackEnd"
OUTPUT_FE="${OUTPUT}/SaladBarFrontEnd"


#Detect if directory exists
if [ -d $OUTPUT ]; then
    echo "Directory exists"
    rm -rf $OUTPUT
else
    echo "Directory does not exist"
    #exit 1
fi

echo $BE_DIR

#Restore NuGet packages
cd $BE_DIR
dotnet restore

#Build BackEnd
dotnet publish $BE -o $OUTPUT_BE

#Build FrontEnd
cd $FE_DIR
ng build --output-path $OUTPUT_FE



