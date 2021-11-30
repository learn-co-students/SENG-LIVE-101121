c1 = Clinic.create({clinic_name:'puppersRus', address:'5555 6th Seattle Wa 00000', phone:'(999)999-9999'})
c2 = Clinic.create({clinic_name:'Seattle pets clinic', address:'5555 6th Seattle Wa 00000', phone:'(999)999-9999'})


Patient.create({species:'cat', name:'rose', age:10, owner:'ix', phone:'9999999', active:true, clinic_id:c1.id})

binding.pry