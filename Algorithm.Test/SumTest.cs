using System;
using Algorithm.Lib;
using Xunit;

namespace Algorithm.Test
{
    public class SumTest
    {
        [Theory]
        [InlineData(new int[] { }, 0)]
        [InlineData(new int[] { 1 }, 1)]
        [InlineData(new int[] { 8 }, 8)]
        [InlineData(new int[] { 1, 2 }, 3)]
        [InlineData(new int[] { 1, 2, 5 }, 8)]
        public void Sum_ReturnSum_When_InputArrayInt(int[] arr, int expected)
        {
            Assert.Equal(expected, Recursion.Sum(arr));
        }
    }
}
