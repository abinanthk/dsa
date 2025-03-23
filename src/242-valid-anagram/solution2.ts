export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charCounts = new Array(26);

  charCounts.fill(0);

  for (let i = 0; i < s.length; i++) {
    charCounts[s.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]++;
    charCounts[t.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (let value of charCounts) {
    if (value) {
      return false;
    }
  }

  return true;
}
