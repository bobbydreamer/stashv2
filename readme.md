# Stash - version 2 ( in-progress )

### Whats new
New design will be minimalistic and shows top 100 notes on the home page by default, earlier version displayed all the notes. 

##### Features

###### Stage 1
* Notes entered via EditorMD
* Dark mode 

###### Stage 2
* Expense Tracker
* Todos like kanban board

### Commands/Tools used during development

* Convert HTML tags to pug : [html-to-pug](https://html-to-pug.com/)

NPM Packags used
```
npm init
npm install express --save
npm install pug --save
npm install body-parser --save
```

git commands
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

### Development points 
* [Very useful read](https://marcandrew.me/ui-ux-tips-collection-vol-one/). Points taken are 
  * **Try to create generous Tappable areas on Mobile** : Changed header link to icons
  * **Using just one typeface in your design is all good. Ignore the haters** :     
* [SVG Header image](https://www.smashingmagazine.com/2014/11/styling-and-animating-svgs-with-css/)
  * Initially tried with `<img>` and tried to change color with `fill` it did not work and after reading above article got to know i) with `img` `CSS background image` you cannot do any CSS interactions which includes changing fill. So had to use `svg` in the pug itself and now everything works. My initial intention was to keep the SVG separate not put it in pug but due to limitations had no choice. 

### Deployments 

Firestore database
```
```

Firebase hosting
```
```