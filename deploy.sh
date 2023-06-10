git checkout -b gh-pages

# Add all files
git add .

# Commit the changes
git commit -m "Push to gh-pages"

# Push the changes to GitHub
git push origin gh-pages

git checkout master
# Open the website in a web browser
#open "http://$(git config user.name).github.io/$(basename $(git rev-parse --show-toplevel))"
# Get the repository URL
REPO_URL=$(git remote get-url origin)

# Get the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Check if the current branch is gh-pages
if [ "$BRANCH" = "gh-pages" ]; then
    # Get the GitHub username from git config
    USERNAME=$(git config user.name)

    # Generate the website URL
    WEBSITE_URL="http://$USERNAME.github.io/$(basename $(git rev-parse --show-toplevel))"

    # Update the repository settings
    curl -X PATCH \
        -H "Authorization: token YOUR_GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/USERNAME/REPO_NAME" \
        -d "{\"name\":\"REPO_NAME\",\"description\":\"\",\"homepage\":\"$WEBSITE_URL\"}"
else
    echo "Not on the gh-pages branch. Skipping updating the About section."
fi

open "http://$(git config user.name).github.io/$(basename $(git remote get-url origin) .git)