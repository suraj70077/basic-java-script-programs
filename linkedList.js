    class Node{
        constructor(data = null, next = null){
            this.data = data;
            this.next = next
        }
    }

    class LinkedList{
        constructor(){
            this.head = null 
        }

        insertANode(data){
            this.head = new Node(data,this.head)
        }

        insertAtLast(data){
            let current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            current.next = new Node(data)
        }

        
        
    }

    const ll = new LinkedList()
    ll.insertANode(10)
    ll.insertANode(20)
    ll.insertAtLast(30)
    

    console.log("Linked list #", ll)