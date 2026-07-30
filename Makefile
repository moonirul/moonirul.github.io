.PHONY: install serve build clean check

check:
	@echo "Ruby version:" && ruby -v || true
	@echo "Bundler:" && bundle -v || true
	@echo "Jekyll:" && bundle exec jekyll -v || true

install:
	bundle install

serve:
	bundle exec jekyll serve --livereload

build:
	JEKYLL_ENV=production bundle exec jekyll build

clean:
	rm -rf _site .jekyll-metadata .sass-cache

