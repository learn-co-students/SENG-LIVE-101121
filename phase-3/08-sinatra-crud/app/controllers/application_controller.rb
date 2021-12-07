class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do
    { message: "Welcome to Sinatra" }.to_json
  end

end
