using System;
using System.Collections.Generic;
using Algorithm.Lib;
using Xunit;

namespace Algorithm.Test
{
    public class QuickSortTest
    {
        public static IEnumerable<object[]> Data()
        {
            yield return new object[] { new List<int>(), new List<int>() };
            yield return new object[] { new List<int>() { 1 }, new List<int>() { 1 } };
            yield return new object[] { new List<int>() { 1, 3, 2 }, new List<int>() { 1, 2, 3 } };
            yield return new object[] { new List<int>() { 1, 3, 5, 0, 2 }, new List<int>() { 0, 1, 2, 3, 5 } };
        }

        [Theory]
        [MemberData(nameof(Data))]

        public void QuickSort_ReturnSotredListASC_When_InputListInt(List<int> arr, List<int> expected)
        {
            Assert.Equal(expected, Sort.QuickSort(arr));
        }
    }
}