LEKTOR_FLAGS = -f minify
LEKTOR_PORT = 8000

FILE_SNOWFLAKE = assets/static/snowflake.min.css
DIR_BUILD = build

BIN_LEKTOR = lektor

SNOWFLAKE_COMPONENTS = typography inline-list footer button
SNOWFLAKE_COLOR = \#0678bd


.PHONY: build server clean

build:
	@mkdir -p $(DIR_BUILD)
	@$(BIN_LEKTOR) build -O $(DIR_BUILD) $(LEKTOR_FLAGS)

server:
	@mkdir -p $(DIR_BUILD)
	@$(BIN_LEKTOR) server -p $(LEKTOR_PORT) $(LEKTOR_FLAGS)

clean:
	@lektor clean --yes
	@rm -rf $(DIR_BUILD)

update-snowflake:
	@snowflake-css -c "$(SNOWFLAKE_COLOR)" -m $(SNOWFLAKE_COMPONENTS) > $(FILE_SNOWFLAKE)
