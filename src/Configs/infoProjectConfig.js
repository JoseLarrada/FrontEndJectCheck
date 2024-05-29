export const recievedMembers=(item)=>{
    const members=[];
    if(item.firstsMember!==""){
        members.push(item.firstsMember);
    }else if (item.secondMember!==""){
        members.push(item.secondMember);
    }else if(item.thirdMember!==""){
        members.push(item.thirdMember);
    }
    return members;
}