class ClinicsController < ApplicationController
  #Get all clinics
    get "/clinics" do
        Clinic.all.to_json
    end 
  
end