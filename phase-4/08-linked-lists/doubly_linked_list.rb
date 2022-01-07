class DoublyLinkedList
    attr_accessor :head, :tail
  
    def initialize
      @head = nil
      @tail = nil
    end

    def add_node_to_beggining_of_list(node)
        if head.nil?
          self.head = node
          self.tail = node
        else
          node.prev_node = self.tail
          self.tail.next_node = node
          self.tail = node
        end
      end

      def remove_last_node
        return "This list is currently empty" if !self.head

        if self.head == self.tail 
            self.head = nil
            self.tail = nil
        else
            sec_to_last = self.tail.prev_node
            sec_to_last.next_node = nil
            self.tail = sec_to_last
        end
    end
  
  end