class LinkedList
    attr_accessor :head
  
    def initialize
      @head = nil
    end

    def add_node_to_end_of_list(node)
       if !head
        self.head = node 
        return self
       end 

       end_node = head 
       while end_node.next_node
        end_node = end_node.next_node
       end

        end_node.next_node = node
        self
    end

    def add_node_to_beggining_of_list(node)
        node.next_node = head 
        self.head = node 
    end

    def size
        if !self.head 
            count = 0
        else
            count = 1
            current_node = self.head
            while current_node.next_node != nil
                current_node = current_node.next_node
                count += 1
            end
        end
        count
    end

    def clear 
        self.head = nil
    end

    def remove_first_node 
        if !self.head
            return "This list is currently empty"
        else
            current_head = self.head
            new_head = self.head.next_node
            self.head.next_node = nil
            self.head = new_head
        end
        current_head
    end

    def remove_last_node
        if !self.head
            return "This list is currently empty"
        else
            current_node = self.head
            while current_node.next_node.next_node != nil
                current_node = current_node.next_node
            end
            last_node = current_node.next_node
            current_node.next_node = nil
        end
        last_node
    end

    def print_list 
        current_node = self.head 
        output = ''
        while current_node != nil 
            output += current_node.data 
            output += ' -> ' if current_node.next_node != nil
            current_node = current_node.next_node
        end
        output
    end

    def search_list(data)
        current_node = self.head
        while current_node
          if current_node.data == data
            return current_node
          end
          current_node = current_node.next_node
        end
        "0 Results"
      end

  end
