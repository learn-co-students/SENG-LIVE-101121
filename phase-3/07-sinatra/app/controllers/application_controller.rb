class ApplicationController < Sinatra::Base
  # By default sinatra's Content-type responce header is text/html
  # This will set sinatra's Content-type to 'application/json'
  set :default_content_type, 'application/json'

  get '/' do
    "Hello Rose"
  end

  get '/patients' do
    patients = Patient.all
    patients.to_json
  end
  

end
