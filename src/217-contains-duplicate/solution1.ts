export function containsDuplicate(nums: number[]): boolean {
  const seenNumbers = new Set<number>();

  for (let num of nums) {
    if (seenNumbers.has(num)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}
