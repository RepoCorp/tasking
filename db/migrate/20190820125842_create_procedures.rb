class CreateProcedures < ActiveRecord::Migration[5.2]
  def change
    create_table :procedures do |t|
      t.references :vehicle, foreign_key: true
      t.references :procedure_type, foreign_key: true
      t.datetime :due_date
      t.datetime :completed_date
      t.timestamps
    end
  end
end
