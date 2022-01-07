class Node
    attr_accessor :data, :next_node, :prev_node
  
    def initialize(data, next_node = nil, prev_node = nil)
      @data = data
      @next_node = next_node
      @prev_node = prev_node
    end
  end