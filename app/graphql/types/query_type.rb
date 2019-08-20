module Types
  class QueryType < Types::BaseObject
    field :vehicles, [Types::VehicleType], null: true
    def vehicles
      Vehicle.all
    end
  end
end
