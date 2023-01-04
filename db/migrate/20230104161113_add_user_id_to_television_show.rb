class AddUserIdToTelevisionShow < ActiveRecord::Migration[6.1]
  def change
    add_column :television_shows, :user_id, :integer
  end
end
