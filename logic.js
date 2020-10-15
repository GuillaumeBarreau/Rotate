const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} return rotate array to the right by k step
 */
const rotate_b = (nums, k) => {

    let index = 0;

    while (index < k) {
        nums.unshift(...nums.splice(-1));
        index+=1
        
        console.log('STEPS : ', index);
        console.log(nums);
    }

    return nums;
};

console.log("/// start rotate_b ///")
console.log('Output: ', rotate_b([...nums], k));
console.log("/// end rotate_b ///")

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} return rotate array to the right by k step
 */
const rotate_c = (nums, k) => {

    for (let index = 0; index < k; index+=1) {
        nums.unshift(nums.pop())

        console.log('STEPS : ', index+1);
        console.log(nums);
    }

    return nums;
};

console.log("/// start rotate_c ///")
console.log('Output: ', rotate_c([...nums], k));
console.log("/// end rotate_c ///")

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} return rotate array to the right by k step
 */
var rotate_d =  (nums, k) => {

    const length = (k > nums.length) 
        ? k % nums.length 
        : k

    nums.unshift(...nums.splice(nums.length - length));
    
    return nums;
};

console.log("/// start rotate_d ///")
console.log('Output: ', rotate_d([...nums], k));
console.log("/// end rotate_d ///")