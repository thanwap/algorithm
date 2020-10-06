using System.Collections.Generic;
using System.Linq;

namespace Algorithm.Lib
{
    public static class Sort
    {
        public static List<int> QuickSort(List<int> arr)
        {
            if (arr.Count < 2)
                return arr;

            int pivot = arr[0];
            var lessser = arr.Where(x => x < pivot).ToList();
            var grater = arr.Where(x => x > pivot).ToList();

            var result = new List<int>();
            result.AddRange(QuickSort(lessser));
            result.Add(pivot);
            result.AddRange(QuickSort(grater));

            return result;
        }
    }
}