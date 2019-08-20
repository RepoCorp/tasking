
user = User.create first_name: "Joe", last_name: "Route"
vehicle = Vehicle.create user: user, plate: "PEO777"
procedure = Procedure.create name: "License"
vehicle.vehicle_procedures << VehicleProcedure.create(procedure: procedure, due_date: Date.today)
