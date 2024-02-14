// 88. merge sorted array
function merge(nums1, m, nums2, n) {
    var p1 = m - 1;
    var p2 = n - 1;
    for (var p = m + n - 1; p >= 0; p--) {
        if (p2 < 0)
            break;
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        }
        else {
            nums1[p] = nums2[p2];
            p2--;
        }
    }
}
;
var testCases = [
    { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3, expected: [1, 2, 2, 3, 5, 6] },
    { nums1: [1], m: 1, nums2: [], n: 0, expected: [1] },
    { nums1: [0], m: 0, nums2: [1], n: 1, expected: [1] }
];
testCases.forEach(function (_a, index) {
    var nums1 = _a.nums1, m = _a.m, nums2 = _a.nums2, n = _a.n, expected = _a.expected;
    console.log("Running test case ".concat(index + 1));
    merge(nums1, m, nums2, n);
    console.log("Result: ".concat(nums1));
    console.log("Expected: ".concat(expected));
    console.log("-----");
});
