# Stash - version 2

### Whats new
New design will be minimalistic and shows top 100 notes on the home page by default, earlier version displayed all the notes. 

##### Features
* Notes
* Expense Tracker
* Notes in plain text, snippet and markdown
* Todos

### Commands for development use 

* Convert HTML tags to pug : [html-to-pug](https://html-to-pug.com/)

node
```
npm init
npm install express --save
npm install pug --save
npm install body-parser --save

```

git
```
# Initial
git init

echo "node_modules" > .gitignore
echo "npm-debug.log*" >> .gitignore

git add .
git commit -m "initial commit"
git remote add origin https://github.com/bobbydreamer/stashv2.git
git branch -M main
git push --force -u origin main

# Everyday
git add .
git commit -m "November 2020 - Setup : installed npm packags"


# Rarely used commands
# Check ignored files
git check-ignore -v * 

# Untrack a file 
git rm --cached fileF1.txt

git tag –a v2.0 <hash>
git describe

# Replacing file in working directory with file in index/staging
git checkout -- fileA.txt

# Replacing file in WD with file in HEAD ( HEAD -> Staging -> WD )
git checkout HEAD -- fileA.txt
```

### Deployments 

Firestore database
```
```

Firebase hosting
```
```