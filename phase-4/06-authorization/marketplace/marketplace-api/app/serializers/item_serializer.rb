class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :price, :status

  belongs_to :seller
  has_many :categories

  def price 
      "$#{'%.2f' % self.object.price}" 
  end

  def status 
    if self.object.sold 
      "Sold"
    else 
      "Buy Now"
    end
  end

end
