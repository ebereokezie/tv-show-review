class AddSlugToTelevisionShow < ActiveRecord::Migration[6.1]
  def change
    add_column :television_shows, :slug, :string
  end
end
