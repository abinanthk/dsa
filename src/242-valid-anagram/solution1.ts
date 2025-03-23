export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const counter = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      continue;
    }

    counter[s[i]] = (counter[s[i]] ?? 0) + 1;
    counter[t[i]] = (counter[t[i]] ?? 0) - 1;
  }

  for (let value of Object.values(counter)) {
    if (value) {
      return false;
    }
  }

  return true;
}
