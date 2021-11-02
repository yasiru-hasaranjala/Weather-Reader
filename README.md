1. npm install

2. Use 'database script.sql' script file to create Database.

3. Replace the password in the 'src/database.js' accordig to your mysql workbench 

4. Start Program by 'node src/app.js'

5. Use following format to get list of temperature data 

curl --location --request GET 'http://localhost:3000/' \
--header 'x-auth: ba33e7c4-1173-40cb-9662-e090eebd6f67'