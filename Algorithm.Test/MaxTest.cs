using System;
using Algorithm.Lib;
using Xunit;

namespace Algorithm.Test
{
    public class MaxTest
    {
        [Theory]
        [InlineData(new int[] { }, 0)]
        [InlineData(new int[] { 7 }, 7)]
        [InlineData(new int[] { 1, 2 }, 2)]
        [InlineData(new int[] { 1, 2, 5 }, 5)]
        [InlineData(new int[] { 5, 2, 1 }, 5)]
        [InlineData(new int[] { 5, 2, 9, 1 }, 9)]
        public void Max_ReturnMax_When_InputArrayInt(int[] arr, int expected)
        {
            Assert.Equal(expected, Recursion.Max(arr));
        }
    }
}
