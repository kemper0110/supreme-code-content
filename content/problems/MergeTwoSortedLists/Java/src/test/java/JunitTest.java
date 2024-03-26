import org.example.Solution;
import org.example.ListNode;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class JunitTest {
    private static Stream<Arguments> testMergeTwoLists() {
        return Stream.of(
                Arguments.of(arrayToList(new int[]{1, 2, 4}), arrayToList(new int[]{1, 3, 4}), new int[]{1, 1, 2, 3, 4, 4}),
                Arguments.of(arrayToList(new int[]{1234, 5678, 9012}), arrayToList(new int[]{14690}), new int[]{1234, 5678, 9012, 14690}),
                Arguments.of(arrayToList(new int[]{2, 2, 3}), arrayToList(new int[]{4}), new int[]{2, 2, 3, 4})
        );
    }

    @ParameterizedTest
    @MethodSource
    public void testMergeTwoLists(ListNode list1, ListNode list2, int[] expected) {
        Solution solution = new Solution();
        ListNode output = solution.mergeTwoLists(list1, list2);
        assertListEquals(expected, output);
    }

    private static ListNode arrayToList(int[] arr) {
        if (arr == null || arr.length == 0) return null;
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        for (int num : arr) {
            current.next = new ListNode(num);
            current = current.next;
        }
        return dummy.next;
    }

    private static void assertListEquals(int[] expected, ListNode head) {
        ListNode current = head;
        int i = 0;
        while (current != null) {
            assertArrayEquals(new int[]{expected[i++]}, new int[]{current.val});
            current = current.next;
        }
    }
}
