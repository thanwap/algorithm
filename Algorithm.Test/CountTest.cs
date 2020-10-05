using System;
using Algorithm.Lib;
using Xunit;

namespace Algorithm.Test
{
    public class CountTest
    {
        [Theory]
        [InlineData(new int[] { }, 0)]
        [InlineData(new int[] { 1 }, 1)]
        [InlineData(new int[] { 8 }, 1)]
        [InlineData(new int[] { 1, 2 }, 2)]
        [InlineData(new int[] { 1, 2, 5 }, 3)]
        public void Count_ReturnCount_When_InputArrayInt(int[] arr, int expected)
        {
            Assert.Equal(expected, Recursion.Count(arr));
        }
    }
}
