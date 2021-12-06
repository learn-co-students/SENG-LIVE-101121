class ApplicationController < Sinatra::Base
  # By default sinatra's Content-type responce header is text/html
  # This will set sinatra's Content-type to 'application/json'
  set :default_content_type, 'application/json'
  
  get "/" do
    { message: "Welcome to Sinatra" }.to_json
  end
  

end
