webpack -p 
git add --all
git commit -m $(date +"%T")
git fetch && git rebase origin/master
git push
