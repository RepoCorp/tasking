module Types
  class VehicleType < Types::BaseObject
    field :id, ID, null: false
    field :plate, String, null: true
    field :user, UserType, null: false
    field :procedures, [ProcedureType], null: false
  end
end