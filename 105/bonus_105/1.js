var sumOfUnique = function(nums) {
    let rem=[];
    let ret=0;
    for(let i=nums.length-1;i>=0;i--){
        if(nums.indexOf(nums[i])!==i){
            rem.push(nums.indexOf(nums[i]));
            nums[i]=0
        }
    }
    for(i of rem){
        nums[i]=0
    }
    for(i of nums){
        ret+=i
    }    
    return ret;
};
