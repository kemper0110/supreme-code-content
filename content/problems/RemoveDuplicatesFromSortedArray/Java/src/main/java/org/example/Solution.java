package org.example;

import java.util.HashMap;
public class Solution {
    public static int removeDuplicates(int[] nums) {
        int n = nums.length;
        if (n <= 1) return n;

        int pointer = 0;

        for (int i = 1; i < n; i++) {
            if (nums[i] != nums[pointer]) {
                pointer++;
                nums[pointer] = nums[i];
            }
        }

        return pointer + 1;
    }
}