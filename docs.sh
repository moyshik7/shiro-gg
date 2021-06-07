printf "Creating Docs for shiro.gg"
printf "\n\n"
printf "Clearing /docs"

rm -r -f ./docs
mkdir docs

printf "\n\n"
printf "Cleared /docs"
printf "Generating new Docs"
printf "\n\n"

npx typedoc ./src/main.ts --out ./docs/

printf "\n\n\n"
echo 'shiro.gg.js.org' >> ./docs/CNAME

printf "Generated Docs"
printf "Done"
