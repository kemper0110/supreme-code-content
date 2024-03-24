const {expect, describe, test} = require("@jest/globals");

const removeDuplicates = require('./solution');

describe('removeDuplicates', () => {
    test.each`
    nums                              |   expected            
    ${[1, 1, 2]}                      |   ${[1, 2]}                 
    ${[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]} |   ${[0, 1, 2, 3, 4]}        
    ${[1, 1, 1, 2, 2, 3, 3, 4]}       |   ${[1, 2, 3, 4]}           
    ${[3, 3]}                         |   ${[3]}                    
    ${[]}                             |   ${[]}                            
    ${[2, 2, 3, 3, 4]}                |   ${[2, 3, 4]}              
    ${[4, 4, 5, 5, 6]}                |   ${[4, 5, 6]}    
    ${[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]} |   ${[1, 2, 3, 4, 5, 6]}    
    `('removeDuplicates $nums -> $expected', ({nums, expected}) => {
        const k = removeDuplicates(nums)
        expect(k).toBe(expected.length)
        expect(nums).toEqual(expected)
    })
});