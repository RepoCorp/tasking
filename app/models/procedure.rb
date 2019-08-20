class Procedure < ApplicationRecord
  belongs_to :procedure_type
  belongs_to :vehicle
end
