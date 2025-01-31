from collections import defaultdict 
def calculateScore( s: str) -> int:
    n = len(s)
    total_score = 0

    hash_map = defaultdict(list)

    for i in range(n):
        order = (ord(s[i]) - 97) % 25
        mirror = - (ord(s[i]) - 97) % 25 

        if mirror in hash_map and hash_map[mirror]:
            total_score += (i - hash_map[mirror].pop())
        else:
            hash_map[order].append(i)

    return total_score


print("\n", calculateScore("abcdef"))
