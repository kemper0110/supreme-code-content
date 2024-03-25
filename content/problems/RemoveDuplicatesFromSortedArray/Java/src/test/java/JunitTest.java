import org.example.Solution;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import java.util.Arrays;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

class JunitTest {
    static Stream<Arguments> removeDuplicatesTest() {
        return Stream.of(
                Arguments.of(new int[]{1, 1, 2}, new int[]{1, 2}),
                Arguments.of(new int[]{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}, new int[]{0, 1, 2, 3, 4}),
                Arguments.of(new int[]{1, 1, 1, 2, 2, 3, 3, 4}, new int[]{1, 2, 3, 4}),
                Arguments.of(new int[]{3, 3}, new int[]{3}),
                Arguments.of(new int[]{}, new int[]{}),
                Arguments.of(new int[]{2, 2, 3, 3, 4}, new int[]{2, 3, 4}),
                Arguments.of(new int[]{4, 4, 5, 5, 6}, new int[]{4, 5, 6}),
                Arguments.of(new int[]{1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6}, new int[]{1, 2, 3, 4, 5, 6})
        );
    }
    @ParameterizedTest
    @MethodSource
    void removeDuplicatesTest(int[] input, int[] expected) {
        int k = Solution.removeDuplicates(input);
        assertEquals(expected.length, k);
        assertArrayEquals(expected, Arrays.copyOfRange(input, 0, k));
    }
}
