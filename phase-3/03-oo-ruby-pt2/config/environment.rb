# The environment file is used to bundle all dependencies and files meant to be shared across the application in a much neater and organized way. 

# require is like an import statement except it loads all methods from the required file (not just the default export)
require "bundler/setup"
# Here we're calling a method that requires all of the ruby gems in the default environment (not in a group like development or test) For our purposes, this will load require_all and pry so that we can use `require_all` and `binding.pry` within our code
Bundler.require(:default)

# One of our dependencies that we loaded in the previous expression was the require_all gem. It allows us to require all of the files within a directory. The path we pass to it will be relative to the root path of the project (where the Gemfile is). In our case, we're loading all of the files inside of the lib directory, so if we write code in there (like a method) it will be accessible to us after the require_all below
require_all "lib"