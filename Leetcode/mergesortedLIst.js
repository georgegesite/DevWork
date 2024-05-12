var mergeTwoLists = function(list1, list2) {

    var newlist = new ListNode();

    var headNewList = newlist;

    while( list1!= null && list2!=null){
        if(list1.val < list2.val){  // if number of list1 is smaller, add to new list
            newlist.next = list1;
            list1 = list1.next; 
        }else {
            newlist.next = list2;
            list2 = list2.next;
        }
        newlist = newlist.next;
    }

    if(list1 == null){
        newlist.next = list2;
    }
    if(list2 == null){
        newlist.next = list1;
    }

    return headNewList.next;
    
};