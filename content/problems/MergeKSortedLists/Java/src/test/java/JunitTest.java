import org.example.Solution;
import org.example.ListNode;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.api.Test;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

class JunitTest {
    @Test
    public void testMergeKLists() {
        ListNode[] lists1 = {
                new ListNode(1, new ListNode(4, new ListNode(5))),
                new ListNode(1, new ListNode(3, new ListNode(4))),
                new ListNode(2, new ListNode(6))
        };
        ListNode output1 = Solution.mergeKLists(lists1);
        int[] expected1 = {1, 1, 2, 3, 4, 4, 5, 6};
        assertListEquals(expected1, output1);
    }

    @Test
    public void te2() {
        ListNode[] lists2 = {};
        assertNull(Solution.mergeKLists(lists2));
    }

    @Test
    public void te3() {
        ListNode[] lists3 = {null};
        assertNull(Solution.mergeKLists(lists3));
    }

    // Helper method to assert ListNode list
    private void assertListEquals(int[] expected, ListNode head) {
        ListNode current = head;
        int i = 0;
        while (current != null) {
            assertArrayEquals(new int[]{expected[i++]}, new int[]{current.val});
            current = current.next;
        }
    }
}
