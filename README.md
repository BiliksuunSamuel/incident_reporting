# incident_reporting
--clone the repo
-- npm install // to install all the dependencies
// using locally based postgres db and the cloud instance is accepted and allowed.

--create a .env file in the root diretory or the repo
//in your .env file, add the following variables.
port=1926
dbPassword=<local postgres db password>
dbUser=<local postgres db user>
dbHost=localhost
dbPort=5432
dbName=IncidentReporting
apiKey=<your apikey from openweathermap.org>

//
npm run dev // to run the development mode
npm run test // for testing
npm run build // to build  for deployment

//
npm start // to run the build version
