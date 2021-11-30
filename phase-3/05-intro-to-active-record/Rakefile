require_relative './config/environment'
require 'sinatra/activerecord/rake'

#Runs pry while removing SQL logging from Active Record
desc "pry session"
task :console do
ActiveRecord::Base.logger = Logger.new(STDOUT)
  
  Pry.start
end