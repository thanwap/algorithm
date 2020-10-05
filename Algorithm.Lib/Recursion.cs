using System.Linq;

namespace Algorithm.Lib
{
    public static class Recursion
    {
        public static int Sum(int[] arr)
        {
            if (arr.Length == 0) return 0;
            return arr[0] + Sum(arr.Skip(1).ToArray());
        }

        public static int Count(int[] arr)
        {
            if (arr.Length == 0) return 0;
            return 1 + Count(arr.Skip(1).ToArray());
        }

        public static int Max(int[] arr)
        {
            if (arr.Length == 0)
                return 0;

            if (arr.Length == 1)
                return arr[0];

            if (arr.Length == 2)
                return arr[0] > arr[1] ? arr[0] : arr[1];

            int subMax = Max(arr.Skip(1).ToArray());
            return arr[0] > subMax ? arr[0] : subMax;
        }
    }
}