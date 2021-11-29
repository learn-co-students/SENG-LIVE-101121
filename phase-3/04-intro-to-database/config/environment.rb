require "bundler/setup"


ENV["RACK_ENV"] ||= "development"

Bundler.require(:default, ENV["RACK_ENV"])
DB = SQLite3::Database.new("db/development.db")
DB.results_as_hash = true

require "date"
require "active_support/core_ext/integer/time"
require "active_support/core_ext/date/calculations"
require_all "app"