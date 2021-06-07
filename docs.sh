printf "Creating Docs for shiro.gg"
printf "\n\n"
printf "Clearing /docs"

rm -r -f ./docs/interfaces
rm -r -f ./docs/assets
rm -f ./docs/index.html
rm -f ./docs/modules.html
rm -f ./docs/CNAME

printf "\n\n"
printf "Cleared /docsi\n"
printf "Generating new Docs"
printf "\n\n"

npx typedoc ./src/main.ts --out ./docs/

printf 'shiro-gg.js.org' >> ./docs/CNAME

printf "\n\n\n"

printf "Generated Docs\n"
printf "Done"
