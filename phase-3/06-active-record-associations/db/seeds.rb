# Patient.destroy_all
# Clinic.destroy_all

c1 = Clinic.create({clinic_name:'Seattle pets clinic', address:'444 6th st seattle wa 99999', phone:'(999)999-9999'})
c2 = Clinic.create({clinic_name:'puppersRus', address:'5555 6th Seattle Wa 00000', phone:'(999)999-9999'})


p1 = Patient.create({species:'cat', name:'rose', age:10, owner:'ix', phone:'999999999', active:true, clinic_id:c1.id})
p2 = Patient.create({species:'cat', name:'bob', age:9, owner:'tom', phone:'999999999', active:true, clinic_id:c1.id})
p3 = Patient.create({species:'dog', name:'dan', age:2, owner:'max', phone:'999999999', active:true, clinic_id:c1.id})
p4 = Patient.create({species:'bird', name:'picard', age:2, owner:'oz', phone:'999999999', active:true, clinic_id:c2.id})
p5 = Patient.create({species:'rabit', name:'ted', age:1, owner:'zac', phone:'999999999', active:true, clinic_id:c2.id})

v1 = Vet.create({vet_name:'Anderson', specialty:'cats and dogs'})
v2 = Vet.create({vet_name:'Boe', specialty:'cats and dogs'})
v3 = Vet.create({vet_name:'Yasha', specialty:'small pets'})
v4 = Vet.create({vet_name:'Randol', specialty:'small pets'})

Appointment.create({patient_id:p1.id, vet_id:v1.id})

# binding.pry
puts 'done'