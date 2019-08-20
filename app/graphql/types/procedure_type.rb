module Types
  class ProcedureType < Types::BaseObject
    field :id, ID, null: true
    field :procedure_type, ProcedureTypeType, null: true
    field :due_date, String, null: false
  end
end