# ratemyband
project 1

Setting up Deployd files
1. Go to ratemyband folder with files such as index.html, etc etc.
2. Check if Deployd works with current backend folder, if not delete entire backend folder.
2. Go to command line of ratemyband folder and call, dpd create ratemyband-backend.
3. Backend should be created and move resource folder in ratemyband folder to backend.
4. Start Deployd and browser-sync.

Start Deployd
1. Open one terminal, navigate into ratemyband-backend
2. dpd -d

Start browser-sync
3. Open another terminal, navigate into ratemyband
4. browser-sync start --server --files "*.html, scripts/*.js, stylesheets/*.css"

Troubleshooting
If linter errors = LF should be CRLF or CRLF should be LF
1. Navigate to scripts folder via command line.
2. Call, eslint --fix *.js
3. Check files.

If Deployd = pathing error for MongoDb
1. Contact Scott via GroupMe for Windows instructions
2. If using Unix ask GroupMe
